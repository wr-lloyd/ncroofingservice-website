import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 92,
          background: '#c8102e',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          letterSpacing: '-4px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        NC
      </div>
    ),
    { ...size }
  )
}
