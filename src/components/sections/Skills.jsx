const skills = [
  'JavaScript', 'React', 'Node.js', 'CSS / Tailwind',
  'Git', 'TypeScript', 'Python', 'SQL',
]

const Skills = () => (
  <section id="skills" className="min-h-screen flex flex-col justify-center px-16 md:px-32 bg-black">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills</h2>
    <div className="w-16 h-0.5 bg-gray-500 mb-8" />
    <div className="flex flex-wrap gap-3 max-w-2xl">
      {skills.map((skill) => (
        <span
          key={skill}
          className="border border-gray-600 text-gray-300 px-4 py-2 rounded-full text-sm hover:border-white hover:text-white transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
)

export default Skills
