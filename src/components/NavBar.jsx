import { useState, useEffect } from 'react'
import { navLinks } from '../constants'
import { useLenisScroll } from '../hooks/useLenisScroll'
import { motion } from "framer-motion"

const NavBar = () => {
  const [active, setActive] = useState(navLinks[0]?.id || '')
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
  const el = document.getElementById(id)
  if (!el || !lenisRef.current) return

  lenisRef.current.scrollTo(el)
}

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
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

                {/* ACTIVE UNDERLINE */}
                {active === id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35
                    }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  )
}

export default NavBar
