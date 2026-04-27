import { useState, useEffect } from 'react'

const LINES = [
  'Hey, my name is Diego Banovac',
  'Welcome to my portfolio  :)',
]

const TYPING_SPEED = 55
const LINE_PAUSE = 500

const TerminalHero = () => {
  const [displayed, setDisplayed] = useState(LINES.map(() => ''))
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  const done = lineIdx >= LINES.length

  useEffect(() => {
    if (done) return

    const currentLine = LINES[lineIdx]

    if (charIdx < currentLine.length) {
      const id = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev]
          next[lineIdx] = currentLine.slice(0, charIdx + 1)
          return next
        })
        setCharIdx(c => c + 1)
      }, TYPING_SPEED)
      return () => clearTimeout(id)
    }

    const id = setTimeout(() => {
      setLineIdx(l => l + 1)
      setCharIdx(0)
    }, LINE_PAUSE)
    return () => clearTimeout(id)
  }, [lineIdx, charIdx, done])

  const cursorVisible = (i) =>
    (!done && i === lineIdx) || (done && i === LINES.length - 1)

  return (
    <div className="font-mono text-left select-none">
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {LINES.map((_, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <span className="text-gray-500 text-xl">{'>'}</span>
          <span
            className={
              i === 0
                ? 'text-white text-3xl md:text-5xl font-bold tracking-tight'
                : 'text-gray-400 text-xl md:text-2xl'
            }
          >
            {displayed[i]}
            {cursorVisible(i) && (
              <span
                className="inline-block w-0.5 ml-1 align-middle"
                style={{
                  height: i === 0 ? '2.8rem' : '1.4rem',
                  backgroundColor: 'currentColor',
                  animation: 'blink 1s step-end infinite',
                }}
              />
            )}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TerminalHero
