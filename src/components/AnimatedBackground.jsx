import { useEffect, useRef } from 'react'

const COLS = 120
const ROWS = 70
const PEAKS = 8
const LEVELS = [0.1, 0.18, 0.26, 0.34, 0.42, 0.50, 0.58, 0.66, 0.74, 0.82]

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const peaks = Array.from({ length: PEAKS }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00012,
      vy: (Math.random() - 0.5) * 0.00012,
      strength: 0.5 + Math.random() * 0.5,
      r2: Math.pow(0.12 + Math.random() * 0.22, 2),
    }))

    const field = new Float32Array((COLS + 1) * (ROWS + 1))

    function computeField() {
      for (let row = 0; row <= ROWS; row++) {
        const ny = row / ROWS
        for (let col = 0; col <= COLS; col++) {
          const nx = col / COLS
          let val = 0
          for (const p of peaks) {
            const dx = nx - p.x
            const dy = ny - p.y
            val += p.strength * Math.exp(-(dx * dx + dy * dy) / p.r2)
          }
          field[row * (COLS + 1) + col] = val
        }
      }
    }

    function edgeLerp(a, b, va, vb, t) {
      const dv = vb - va
      if (Math.abs(dv) < 1e-10) return (a + b) / 2
      return a + (b - a) * (t - va) / dv
    }

    function drawContours(threshold, cellW, cellH) {
      ctx.beginPath()
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const tl = field[row * (COLS + 1) + col]
          const tr = field[row * (COLS + 1) + col + 1]
          const bl = field[(row + 1) * (COLS + 1) + col]
          const br = field[(row + 1) * (COLS + 1) + col + 1]

          const sq =
            (tl > threshold ? 8 : 0) |
            (tr > threshold ? 4 : 0) |
            (br > threshold ? 2 : 0) |
            (bl > threshold ? 1 : 0)

          if (sq === 0 || sq === 15) continue

          const x0 = col * cellW
          const x1 = x0 + cellW
          const y0 = row * cellH
          const y1 = y0 + cellH

          const top    = { x: edgeLerp(x0, x1, tl, tr, threshold), y: y0 }
          const right  = { x: x1, y: edgeLerp(y0, y1, tr, br, threshold) }
          const bottom = { x: edgeLerp(x0, x1, bl, br, threshold), y: y1 }
          const left   = { x: x0, y: edgeLerp(y0, y1, tl, bl, threshold) }

          switch (sq) {
            case 1: case 14:
              ctx.moveTo(left.x, left.y); ctx.lineTo(bottom.x, bottom.y); break
            case 2: case 13:
              ctx.moveTo(bottom.x, bottom.y); ctx.lineTo(right.x, right.y); break
            case 3: case 12:
              ctx.moveTo(left.x, left.y); ctx.lineTo(right.x, right.y); break
            case 4: case 11:
              ctx.moveTo(top.x, top.y); ctx.lineTo(right.x, right.y); break
            case 5:
              ctx.moveTo(top.x, top.y); ctx.lineTo(right.x, right.y)
              ctx.moveTo(left.x, left.y); ctx.lineTo(bottom.x, bottom.y); break
            case 6: case 9:
              ctx.moveTo(top.x, top.y); ctx.lineTo(bottom.x, bottom.y); break
            case 7: case 8:
              ctx.moveTo(top.x, top.y); ctx.lineTo(left.x, left.y); break
            case 10:
              ctx.moveTo(top.x, top.y); ctx.lineTo(left.x, left.y)
              ctx.moveTo(bottom.x, bottom.y); ctx.lineTo(right.x, right.y); break
          }
        }
      }
      ctx.stroke()
    }

    const draw = () => {
      const { width, height } = canvas

      for (const p of peaks) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -0.3 || p.x > 1.3) p.vx *= -1
        if (p.y < -0.3 || p.y > 1.3) p.vy *= -1
      }

      computeField()

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, width, height)

      ctx.strokeStyle = 'rgba(140, 140, 140, 0.3)'
      ctx.lineWidth = 0.7

      const cellW = width / COLS
      const cellH = height / ROWS

      for (const level of LEVELS) {
        drawContours(level, cellW, cellH)
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
}

export default AnimatedBackground
