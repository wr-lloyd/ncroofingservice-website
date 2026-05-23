// Small uppercase red eyebrow used above headings throughout the guide.
// Matches the mockup's `.eyebrow` treatment.
export default function GuideEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-brand-red text-xs font-bold uppercase tracking-[0.2em]">
      {children}
    </div>
  )
}
