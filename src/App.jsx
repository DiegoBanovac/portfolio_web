import './App.css'
import NavBar from './components/NavBar.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import TerminalHero from './components/TerminalHero.jsx'
import AboutMe from './components/sections/AboutMe.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Education from './components/sections/Education.jsx'
import Work from './components/sections/Work.jsx'
import Contact from './components/sections/Contact.jsx'
import { useScrollSnap } from './hooks/useScrollSnap.js'

function App() {
  useScrollSnap()

  return (
    <main>
      <AnimatedBackground />
      <NavBar />

      {/* Hero — transparent so animated background shows through */}
      <div id="hero" className="min-h-screen flex items-center justify-between px-16 md:px-32">
        <TerminalHero />
        <img
          src="/emoji.webp"
          alt=""
          className="h-64 md:h-80 w-auto object-contain pr-50"
        />
      </div>

      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Work />
      <Contact />
    </main>
  )
}

export default App
