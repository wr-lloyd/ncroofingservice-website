'use client'

interface TriangleMapProps {
  highlightedRegion: 'raleigh' | 'durham' | 'chapel-hill'
  className?: string
}

// Accurate NC Triangle region county paths based on real boundaries
// ViewBox is set to focus on the Triangle area of NC
const counties = {
  // Wake County - Large county containing Raleigh, Cary, Apex, etc.
  wake: "M 180 95 L 200 85 L 225 82 L 250 88 L 270 95 L 285 108 L 290 125 L 288 145 L 280 165 L 268 180 L 250 190 L 228 195 L 205 192 L 185 182 L 170 165 L 162 145 L 160 125 L 165 108 Z",
  
  // Durham County - Northwest of Wake
  durham: "M 115 72 L 140 65 L 160 68 L 175 78 L 180 95 L 165 108 L 160 125 L 148 135 L 130 138 L 112 130 L 100 115 L 102 95 L 108 80 Z",
  
  // Orange County - West of Durham (Chapel Hill, Hillsborough)
  orange: "M 55 78 L 80 70 L 100 68 L 115 72 L 108 80 L 102 95 L 100 115 L 112 130 L 105 145 L 88 155 L 65 152 L 48 140 L 42 120 L 45 98 Z",
  
  // Person County - North of Durham (Roxboro)
  person: "M 100 15 L 130 10 L 155 15 L 168 28 L 170 48 L 160 68 L 140 65 L 115 72 L 108 80 L 102 95 L 88 85 L 85 60 L 90 35 Z",
  
  // Granville County - Northeast of Durham (Oxford, Creedmoor, Butner)
  granville: "M 155 15 L 185 12 L 215 18 L 235 32 L 238 55 L 230 75 L 215 82 L 200 85 L 180 95 L 175 78 L 160 68 L 170 48 L 168 28 Z",
  
  // Chatham County - South of Orange/Durham (Pittsboro, Siler City)
  chatham: "M 48 140 L 65 152 L 88 155 L 105 145 L 112 130 L 130 138 L 148 135 L 160 145 L 162 165 L 170 182 L 160 200 L 140 215 L 110 220 L 78 212 L 55 195 L 42 170 Z",
  
  // Franklin County - East of Granville/North of Wake
  franklin: "M 235 32 L 265 38 L 290 52 L 298 75 L 290 95 L 285 108 L 270 95 L 250 88 L 225 82 L 215 82 L 230 75 L 238 55 Z",
  
  // Johnston County - Southeast of Wake
  johnston: "M 228 195 L 250 190 L 268 180 L 280 165 L 295 175 L 315 190 L 320 215 L 310 240 L 285 255 L 255 258 L 230 248 L 215 230 L 210 210 Z",
  
  // Harnett County - South of Wake
  harnett: "M 160 200 L 170 182 L 185 182 L 205 192 L 228 195 L 210 210 L 215 230 L 200 250 L 170 260 L 140 255 L 125 235 L 130 215 L 140 215 Z",
  
  // Lee County - Southwest of Chatham
  lee: "M 42 170 L 55 195 L 78 212 L 110 220 L 125 235 L 115 255 L 88 265 L 58 260 L 35 240 L 28 210 L 32 185 Z",
  
  // Alamance County - West of Orange
  alamance: "M 10 85 L 35 75 L 55 78 L 45 98 L 42 120 L 48 140 L 42 170 L 32 185 L 15 175 L 5 150 L 5 115 Z",
  
  // Caswell County - Northwest of Person
  caswell: "M 45 10 L 75 5 L 100 15 L 90 35 L 85 60 L 88 85 L 70 78 L 55 78 L 35 75 L 25 55 L 30 30 Z",
  
  // Vance County - North of Granville
  vance: "M 185 12 L 220 5 L 255 12 L 268 28 L 265 38 L 235 32 L 215 18 Z",
}

// Which counties each rep covers
const regionCounties = {
  raleigh: ['wake', 'franklin', 'johnston', 'harnett'], // Mike - Wake County area
  durham: ['durham', 'person', 'granville'], // Randy - Durham/north
  'chapel-hill': ['orange', 'chatham', 'alamance', 'lee'], // Preston - Orange County area
}

const regionColors = {
  raleigh: { fill: 'rgb(37, 99, 235)', stroke: 'rgb(59, 130, 246)' }, // blue
  durham: { fill: 'rgb(22, 163, 74)', stroke: 'rgb(34, 197, 94)' }, // green
  'chapel-hill': { fill: 'rgb(147, 51, 234)', stroke: 'rgb(168, 85, 247)' }, // purple
}

export default function TriangleMap({ highlightedRegion, className = '' }: TriangleMapProps) {
  const highlightedCounties = regionCounties[highlightedRegion]
  const colors = regionColors[highlightedRegion]

  return (
    <svg 
      viewBox="0 0 330 275" 
      className={`w-full h-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Background shape for NC outline context */}
      <defs>
        <linearGradient id={`gradient-${highlightedRegion}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.fill} stopOpacity="0.3" />
          <stop offset="100%" stopColor={colors.fill} stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* All counties */}
      {Object.entries(counties).map(([name, path]) => {
        const isHighlighted = highlightedCounties.includes(name)
        return (
          <path
            key={name}
            d={path}
            fill={isHighlighted ? `url(#gradient-${highlightedRegion})` : 'transparent'}
            stroke={isHighlighted ? colors.stroke : 'rgba(255,255,255,0.15)'}
            strokeWidth={isHighlighted ? 2 : 0.75}
            strokeOpacity={isHighlighted ? 0.6 : 0.3}
            className="transition-all duration-300"
          />
        )
      })}
      
      {/* County labels for highlighted region (optional, subtle) */}
      {highlightedRegion === 'raleigh' && (
        <text x="220" y="140" fill={colors.stroke} fontSize="8" fontWeight="bold" opacity="0.4">WAKE</text>
      )}
      {highlightedRegion === 'durham' && (
        <text x="130" y="105" fill={colors.stroke} fontSize="8" fontWeight="bold" opacity="0.4">DURHAM</text>
      )}
      {highlightedRegion === 'chapel-hill' && (
        <text x="65" y="115" fill={colors.stroke} fontSize="8" fontWeight="bold" opacity="0.4">ORANGE</text>
      )}
    </svg>
  )
}
