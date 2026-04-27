import { useEffect, useRef } from 'react'

const DURATION = 1100

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function getSections() {
  return [
    document.getElementById('hero'),
    ...Array.from(document.querySelectorAll('section')),
  ].filter(Boolean)
}

export function useScrollSnap() {
  const scrolling = useRef(false)

  useEffect(() => {
    const animateTo = (targetY) => {
      const startY = window.scrollY
      const distance = targetY - startY
      const startTime = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - startTime) / DURATION, 1)
        window.scrollTo(0, startY + distance * easeInOutCubic(progress))
        if (progress < 1) {
          requestAnimationFrame(tick)
        } else {
          // small delay before accepting next scroll
          setTimeout(() => { scrolling.current = false }, 100)
        }
      }

      requestAnimationFrame(tick)
    }

    const go = (direction) => {
      if (scrolling.current) return
      const sections = getSections()

      const currentIndex = sections.reduce((best, s, i) => {
        const d = Math.abs(s.offsetTop - window.scrollY)
        return d < Math.abs(sections[best].offsetTop - window.scrollY) ? i : best
      }, 0)

      const nextIndex = Math.max(0, Math.min(sections.length - 1, currentIndex + direction))
      if (nextIndex === currentIndex) return

      scrolling.current = true
      animateTo(sections[nextIndex].offsetTop)
    }

    const onWheel = (e) => {
      e.preventDefault()
      go(e.deltaY > 0 ? 1 : -1)
    }

    // touch support
    let touchStartY = 0
    const onTouchStart = (e) => { touchStartY = e.touches[0].clientY }
    const onTouchEnd = (e) => {
      const delta = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(delta) > 30) go(delta > 0 ? 1 : -1)
    }

    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); go(1) }
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); go(-1) }
    }

    window.addEventListener('wheel',      onWheel,      { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true  })
    window.addEventListener('touchend',   onTouchEnd,   { passive: true  })
    window.addEventListener('keydown',    onKey)

    return () => {
      window.removeEventListener('wheel',      onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend',   onTouchEnd)
      window.removeEventListener('keydown',    onKey)
    }
  }, [])
}
