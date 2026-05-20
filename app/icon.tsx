import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#c8102e',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          letterSpacing: '-1px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        NC
      </div>
    ),
    { ...size }
  )
}
