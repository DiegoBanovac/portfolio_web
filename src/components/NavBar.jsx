import { useState, useEffect } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
  const [active, setActive] = useState('')

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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-16 right-20 z-50">
      <nav className="mx-10 px-6 py-5 text-white flex items-center justify-between">
        <ul className="flex items-center gap-8 list-none text-lg">
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => scrollTo(e, id)}
                className={`transition-all duration-200 hover:text-gray-300 ${
                  active === id
                    ? 'underline underline-offset-4 decoration-2'
                    : ''
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="border border-gray-600 rounded-3xl px-5 py-2 text-base hover:bg-white hover:text-black transition-colors cursor-pointer">
          <button>Download CV</button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
