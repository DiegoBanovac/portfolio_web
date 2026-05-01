import { useEffect, useRef } from "react"
import Lenis from "lenis"

export function useLenisScroll() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      smoothWheel: true,
      smoothTouch: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    lenisRef.current = lenis

    return () => lenis.destroy()
  }, [])

  return lenisRef
}