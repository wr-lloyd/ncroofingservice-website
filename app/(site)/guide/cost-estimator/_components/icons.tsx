// Small inline SVG icons used inside the estimator option buttons. Each icon
// is drawn into the same 64x40 viewBox so the buttons stay visually aligned
// in the grid. Colors are inherited from the button (currentColor) so the
// active/inactive states get the right red/black/gray automatically.

import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseSvgProps: IconProps = {
  viewBox: '0 0 64 40',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'w-12 h-7',
  'aria-hidden': true,
}

// -- Pitch icons ------------------------------------------------------------
// Each icon is a side-on roof profile: a base line and a peak. The peak gets
// higher for steeper pitches. Anchored to the same base so the eye can see
// the slope difference at a glance.

export function PitchLowIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M4 34 L32 28 L60 34" />
      <line x1="4" y1="34" x2="60" y2="34" strokeDasharray="2 3" opacity="0.4" />
    </svg>
  )
}

export function PitchStandardIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M4 34 L32 20 L60 34" />
      <line x1="4" y1="34" x2="60" y2="34" strokeDasharray="2 3" opacity="0.4" />
    </svg>
  )
}

export function PitchSteepIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M4 34 L32 12 L60 34" />
      <line x1="4" y1="34" x2="60" y2="34" strokeDasharray="2 3" opacity="0.4" />
    </svg>
  )
}

export function PitchVerySteepIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M4 34 L32 6 L60 34" />
      <line x1="4" y1="34" x2="60" y2="34" strokeDasharray="2 3" opacity="0.4" />
    </svg>
  )
}

export function PitchExtremeIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M18 34 L32 4 L46 34" />
      <line x1="4" y1="34" x2="60" y2="34" strokeDasharray="2 3" opacity="0.4" />
    </svg>
  )
}

// -- Story icons ------------------------------------------------------------
// House silhouettes with a triangular roof and a stack of small window
// rectangles for each floor.

export function OneStoryIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M14 20 L32 8 L50 20" />
      <rect x="14" y="20" width="36" height="16" />
      <rect x="20" y="26" width="6" height="6" />
      <rect x="38" y="26" width="6" height="6" />
    </svg>
  )
}

export function TwoStoryIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M14 14 L32 4 L50 14" />
      <rect x="14" y="14" width="36" height="22" />
      <rect x="20" y="18" width="6" height="5" />
      <rect x="38" y="18" width="6" height="5" />
      <rect x="20" y="27" width="6" height="5" />
      <rect x="38" y="27" width="6" height="5" />
    </svg>
  )
}

export function ThreeStoryIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M16 10 L32 2 L48 10" />
      <rect x="16" y="10" width="32" height="26" />
      <rect x="21" y="13" width="5" height="4" />
      <rect x="38" y="13" width="5" height="4" />
      <rect x="21" y="20" width="5" height="4" />
      <rect x="38" y="20" width="5" height="4" />
      <rect x="21" y="27" width="5" height="4" />
      <rect x="38" y="27" width="5" height="4" />
    </svg>
  )
}

// -- Material icons ---------------------------------------------------------
// Small swatches showing the texture pattern of each shingle/panel type.

export function ArchitecturalIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <rect x="6" y="10" width="52" height="22" />
      <line x1="6" y1="17" x2="58" y2="17" />
      <line x1="6" y1="24" x2="58" y2="24" />
      <line x1="14" y1="10" x2="14" y2="17" />
      <line x1="26" y1="10" x2="26" y2="17" />
      <line x1="38" y1="10" x2="38" y2="17" />
      <line x1="50" y1="10" x2="50" y2="17" />
      <line x1="10" y1="17" x2="10" y2="24" />
      <line x1="22" y1="17" x2="22" y2="24" />
      <line x1="34" y1="17" x2="34" y2="24" />
      <line x1="46" y1="17" x2="46" y2="24" />
      <line x1="54" y1="17" x2="54" y2="24" />
    </svg>
  )
}

export function PremiumIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <rect x="6" y="8" width="52" height="26" />
      <path d="M6 16 L18 12 L30 16 L42 12 L54 16 L58 14" />
      <path d="M6 24 L18 20 L30 24 L42 20 L54 24 L58 22" />
      <path d="M6 32 L18 28 L30 32 L42 28 L54 32 L58 30" />
    </svg>
  )
}

export function MetalIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <rect x="6" y="8" width="52" height="26" />
      <line x1="14" y1="8" x2="14" y2="34" />
      <line x1="22" y1="8" x2="22" y2="34" />
      <line x1="30" y1="8" x2="30" y2="34" />
      <line x1="38" y1="8" x2="38" y2="34" />
      <line x1="46" y1="8" x2="46" y2="34" />
      <line x1="54" y1="8" x2="54" y2="34" />
    </svg>
  )
}

// -- Complexity icons -------------------------------------------------------
// Roof outlines from above (plan view) showing increasing number of valleys
// and dormer intersections.

export function SimpleIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M8 32 L32 8 L56 32" />
      <line x1="8" y1="32" x2="56" y2="32" />
    </svg>
  )
}

export function ModerateIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M4 32 L24 12 L44 32" />
      <path d="M30 28 L42 16 L54 28" />
      <line x1="4" y1="32" x2="54" y2="32" />
    </svg>
  )
}

export function ComplexIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M2 32 L14 18 L26 32" />
      <path d="M22 32 L34 12 L46 32" />
      <path d="M42 32 L54 18 L62 32" />
      <path d="M18 28 L24 22 L30 28" />
      <line x1="2" y1="32" x2="62" y2="32" />
    </svg>
  )
}

// -- Region icons -----------------------------------------------------------
// Simple landmark glyphs for each NC region. Small enough to read in a
// button row, not so detailed they become noise.

export function TriangleRegionIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <circle cx="20" cy="14" r="3" />
      <circle cx="44" cy="14" r="3" />
      <circle cx="32" cy="30" r="3" />
      <line x1="22" y1="15" x2="42" y2="15" />
      <line x1="21" y1="17" x2="30" y2="28" />
      <line x1="43" y1="17" x2="34" y2="28" />
    </svg>
  )
}

export function CharlotteRegionIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <rect x="18" y="18" width="6" height="18" />
      <rect x="26" y="10" width="6" height="26" />
      <rect x="34" y="14" width="6" height="22" />
      <rect x="42" y="22" width="6" height="14" />
      <line x1="14" y1="36" x2="52" y2="36" />
    </svg>
  )
}

export function SmallTownRegionIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M16 30 L24 22 L32 30" />
      <rect x="20" y="30" width="8" height="6" />
      <path d="M34 30 L42 22 L50 30" />
      <rect x="38" y="30" width="8" height="6" />
      <line x1="14" y1="36" x2="52" y2="36" />
    </svg>
  )
}

export function MountainsCoastRegionIcon(props: IconProps) {
  return (
    <svg {...baseSvgProps} {...props}>
      <path d="M4 32 L16 16 L26 26 L36 12 L48 28 L60 20 L60 32 Z" />
      <path d="M4 34 Q14 32 24 34 T44 34 T60 34" opacity="0.5" />
    </svg>
  )
}
