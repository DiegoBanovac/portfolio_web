const projects = [
  { title: 'Project One',   desc: 'Short description of what this project does and the tech used.' },
  { title: 'Project Two',   desc: 'Short description of what this project does and the tech used.' },
  { title: 'Project Three', desc: 'Short description of what this project does and the tech used.' },
]

const Projects = () => (
  <section id="projects" className="min-h-screen flex flex-col justify-center px-16 md:px-32 bg-black">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
    <div className="w-16 h-0.5 bg-gray-500 mb-8" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
      {projects.map(({ title, desc }) => (
        <div
          key={title}
          className="border border-gray-700 rounded-xl p-6 hover:border-gray-400 transition-colors"
        >
          <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Projects
