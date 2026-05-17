import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Thunder — Get Hired in Bitcoin. Free guidebook for Bitcoiners hunting their first Bitcoin-only job.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'radial-gradient(circle at 25% 20%, rgba(250,140,218,0.35), transparent 55%), radial-gradient(circle at 80% 90%, rgba(217,70,239,0.25), transparent 55%), #000001',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#FA8CDA',
              boxShadow: '0 0 20px #FA8CDA',
            }}
          />
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            Thunder
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <h1
            style={{
              fontSize: 86,
              lineHeight: 1.05,
              fontWeight: 800,
              margin: 0,
              letterSpacing: '-0.02em',
              maxWidth: 980,
            }}
          >
            Get hired in{' '}
            <span
              style={{
                background: 'linear-gradient(91deg, #FFF 20%, #FA8CDA 70%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Bitcoin.
            </span>
          </h1>
          <p
            style={{
              fontSize: 32,
              lineHeight: 1.35,
              color: 'rgba(255,255,255,0.78)',
              margin: 0,
              maxWidth: 900,
            }}
          >
            Free guidebook for Bitcoiners hunting their first Bitcoin-only job.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: 2,
          }}
        >
          <span style={{ textTransform: 'uppercase', fontWeight: 600 }}>
            Bitcoin career compass
          </span>
          <span style={{ color: '#FA8CDA', fontWeight: 700 }}>thunder</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
