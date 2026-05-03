import './App.css'
import NavBar from './components/NavBar.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import TerminalHero from './components/TerminalHero.jsx'
import AboutMe from './components/sections/AboutMe.jsx'
import Projects from './components/sections/Projects.jsx'
import Education from './components/sections/Education.jsx'
import Work from './components/sections/Work.jsx'
import Contact from './components/sections/Contact.jsx'
import { useLenisScroll } from './hooks/useLenisScroll'

function App() {
  useLenisScroll()

  return (
    <main>
      <AnimatedBackground />
      <NavBar />

      <div id="hero" className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 sm:px-16 md:px-32 md:flex-row md:justify-between">
        <TerminalHero />
        <img
          src="/emoji.webp"
          alt=""
          className="h-48 sm:h-64 md:h-80 w-auto object-contain md:pr-50"
        />
      </div>

      <AboutMe />
      <Projects />
      <Education />
      <Work />
      <Contact />
    </main>
  )
}

export default App
