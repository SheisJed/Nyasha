
import { useEffect, useState } from 'react'
import './WhimsyCompanion.css'

type Position = {
  left: number
  top: number
  facing: 'left' | 'right'
}

const getPositions = (): Position[] => {
  const width = window.innerWidth
  const height = window.innerHeight
  const catWidth = 64
  const catHeight = 48
  const edge = 12

  return [
    { left: edge, top: 110, facing: 'right' },
    { left: Math.max(edge, width * 0.32), top: edge + 72, facing: 'right' },
    { left: Math.max(edge, width - catWidth - edge), top: 110, facing: 'left' },
    {
      left: Math.max(edge, width - catWidth - edge),
      top: Math.max(100, height - catHeight - 36),
      facing: 'left',
    },
    {
      left: Math.max(edge, width * 0.35),
      top: Math.max(100, height - catHeight - 36),
      facing: 'left',
    },
    {
      left: edge,
      top: Math.max(100, height - catHeight - 36),
      facing: 'right',
    },
  ]
}

function WhimsyCompanion() {
  const [positionIndex, setPositionIndex] = useState(0)
  const [positions, setPositions] = useState<Position[]>([])

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    const updatePositions = () => {
      setPositions(getPositions())
    }

    updatePositions()

    const handleMotionPreference = () => {
      if (!reducedMotion.matches) {
        setPositionIndex(0)
      }
    }

    reducedMotion.addEventListener('change', handleMotionPreference)
    window.addEventListener('resize', updatePositions)

    if (reducedMotion.matches) {
      return () => {
        reducedMotion.removeEventListener('change', handleMotionPreference)
        window.removeEventListener('resize', updatePositions)
      }
    }

    const wanderInterval = window.setInterval(() => {
      setPositionIndex((current) => (current + 1) % 6)
    }, 9000)

    return () => {
      window.clearInterval(wanderInterval)
      reducedMotion.removeEventListener('change', handleMotionPreference)
      window.removeEventListener('resize', updatePositions)
    }
  }, [])

  const position = positions[positionIndex]

  return (
    <div className="whimsy-layer" aria-hidden="true">
      <div className="whimsy-butterfly whimsy-butterfly-one">
        <svg viewBox="0 0 40 40">
          <path
            className="butterfly-wing"
            d="M19 19 C7 1 0 9 5 18 C8 24 14 24 19 21 Z"
          />
          <path
            className="butterfly-wing"
            d="M21 19 C33 1 40 9 35 18 C32 24 26 24 21 21 Z"
          />
          <path
            className="butterfly-wing"
            d="M19 22 C7 20 8 34 16 32 L20 24 Z"
          />
          <path
            className="butterfly-wing"
            d="M21 22 C33 20 32 34 24 32 L20 24 Z"
          />
          <path className="butterfly-body" d="M20 17 L20 29" />
          <path className="butterfly-body" d="M20 17 Q15 9 13 12" />
          <path className="butterfly-body" d="M20 17 Q25 9 27 12" />
        </svg>
      </div>

      <div className="whimsy-butterfly whimsy-butterfly-two">
        <svg viewBox="0 0 40 40">
          <path
            className="butterfly-wing"
            d="M19 19 C7 1 0 9 5 18 C8 24 14 24 19 21 Z"
          />
          <path
            className="butterfly-wing"
            d="M21 19 C33 1 40 9 35 18 C32 24 26 24 21 21 Z"
          />
          <path
            className="butterfly-wing"
            d="M19 22 C7 20 8 34 16 32 L20 24 Z"
          />
          <path
            className="butterfly-wing"
            d="M21 22 C33 20 32 34 24 32 L20 24 Z"
          />
          <path className="butterfly-body" d="M20 17 L20 29" />
          <path className="butterfly-body" d="M20 17 Q15 9 13 12" />
          <path className="butterfly-body" d="M20 17 Q25 9 27 12" />
        </svg>
      </div>

      {position && (
        <div
          className={`whimsy-cat whimsy-cat-facing-${position.facing}`}
          style={{
            left: position.left,
            top: position.top,
          }}
        >
          <svg
            viewBox="0 0 80 60"
            className="whimsy-cat-drawing"
          >
            {/* Tail */}
            <path
              className="cat-fur cat-tail"
              d="M20 39 C5 39 6 22 14 21 C19 20 19 27 15 28"
            />

            {/* Body */}
            <path
              className="cat-fur"
              d="M17 37 C17 26 27 24 39 28 C49 30 55 36 54 43 L52 49 L20 49 Z"
            />

            {/* Head and ears */}
            <path
              className="cat-fur"
              d="M42 28 L42 13 L51 20 L61 12 L64 29
                 C71 33 70 43 61 45 L45 42 Z"
            />

            {/* Inner ears */}
            <path
              className="cat-ear"
              d="M46 19 L46 24 L50 22 Z M57 20 L61 17 L61 25 Z"
            />

            {/* Face */}
            <ellipse className="cat-face" cx="61" cy="33" rx="8" ry="6" />
            <circle className="cat-eye" cx="59" cy="30" r="1.5" />
            <circle className="cat-eye" cx="67" cy="30" r="1.5" />
            <path
              className="cat-nose"
              d="M62 34 L64 34 L63 36 Z"
            />
            <path
              className="cat-whiskers"
              d="M57 35 L49 33 M57 37 L50 38 M67 35 L73 33 M67 37 L73 38"
            />

            {/* Paws */}
            <path className="cat-fur" d="M21 44 L20 52 L28 52 L29 47 Z" />
            <path className="cat-fur" d="M42 44 L42 52 L50 52 L49 45 Z" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default WhimsyCompanion
