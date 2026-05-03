import { useState, useEffect } from 'react'
import { navLinks } from '../constants'
import { useLenisScroll } from '../hooks/useLenisScroll'
import { motion, AnimatePresence } from "framer-motion"

const NavBar = () => {
  const [active, setActive] = useState(navLinks[0]?.id || '')
  const [menuOpen, setMenuOpen] = useState(false)
  const lenisRef = useLenisScroll()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
    )

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (!el || !lenisRef.current) return
    lenisRef.current.scrollTo(el)
  }

  return (
    <>
      {/* DESKTOP NAV */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <nav className="flex items-center gap-8 px-8 py-4 rounded-full
                    bg-white/10 backdrop-blur-xl
                    border border-white/20
                    shadow-lg shadow-black/20">
          <ul className="flex items-center gap-6 text-sm md:text-base">
            {navLinks.map(({ label, id }) => (
              <li key={id} className="relative">
                <a
                  href={`#${id}`}
                  onClick={(e) => scrollTo(e, id)}
                  className={`px-2 py-1 transition-colors ${
                    active === id ? "text-white" : "text-gray-400"
                  }`}
                >
                  {label}
                  {active === id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* MOBILE HAMBURGER BUTTON */}
      <button
        onClick={() => setMenuOpen((o) => !o)}
        className="fixed top-5 right-5 z-50 md:hidden
                   w-10 h-10 flex flex-col items-center justify-center gap-1.5
                   rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollTo(e, id)}
                className={`text-2xl font-semibold transition-colors ${
                  active === id ? "text-white" : "text-gray-500"
                }`}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
