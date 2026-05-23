import type { Chapter } from '@/lib/guide'
import { getChapterNeighbors } from '@/lib/guide'
import ChapterHero from './ChapterHero'
import ChapterTOC, { type TocItem } from './ChapterTOC'
import PrevNextChapter from './PrevNextChapter'

interface ChapterShellProps {
  chapter: Chapter
  tocItems: TocItem[]
  /** Optional quick-tools tiles for the hero. */
  quickTools?: React.ComponentProps<typeof ChapterHero>['quickTools']
  /** Chapter body — typically a series of `<ChapterSection>` elements. */
  children: React.ReactNode
}

/**
 * Outer layout for every guide chapter: hero, sticky mobile TOC,
 * two-column desktop grid (content + sticky right-rail TOC), and
 * prev/next pagination. Reads neighbors from lib/guide.ts so the
 * pagination is always in sync with the canonical chapter order.
 */
export default function ChapterShell({
  chapter,
  tocItems,
  quickTools,
  children,
}: ChapterShellProps) {
  const { prev, next } = getChapterNeighbors(chapter.slug)
  return (
    <main className="pt-20 bg-white">
      <ChapterHero chapter={chapter} quickTools={quickTools} />
      <ChapterTOC items={tocItems} variant="mobile" />

      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">
          <div className="min-w-0">{children}</div>
          <div className="hidden lg:block py-20 pr-4">
            <ChapterTOC items={tocItems} variant="desktop" />
          </div>
        </div>
      </div>

      <PrevNextChapter prev={prev} next={next} />
    </main>
  )
}
