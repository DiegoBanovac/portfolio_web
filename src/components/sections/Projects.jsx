import { useRef } from "react"
import { projects } from "../../constants"

const Projects = () => {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" })
  }

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-16 md:px-32 bg-black"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>

        {/* ARROW BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 flex items-center justify-center
                       rounded-full border border-white/20 text-white/60
                       hover:border-white/50 hover:text-white transition-all duration-200"
            aria-label="Scroll left"
          >
            &#8592;
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 flex items-center justify-center
                       rounded-full border border-white/20 text-white/60
                       hover:border-white/50 hover:text-white transition-all duration-200"
            aria-label="Scroll right"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div className="w-16 h-0.5 bg-white/20 mb-10" />

      {/* HORIZONTAL SCROLL */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="min-w-92.5 max-w-92.5 snap-start flex flex-col
                       border border-white/10 rounded-2xl
                       overflow-hidden hover:border-white/30
                       transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="h-56 bg-gray-900 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-white text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-5 leading-relaxed flex-1">
                {project.desc}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full
                               bg-white/5 text-gray-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex justify-between text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
