import { skills } from '../../constants'

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-16 md:px-32 bg-black text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Skills
      </h2>

      <div className="w-16 h-[2px] bg-white/20 mb-12" />

      {/* GRID */}
      <div className="space-y-12">

        {/* FRONTEND */}
        <div>
          <div>Techologies i have worked wtih</div>
          <h3 className="text-xl text-gray-300 mb-6">Frontend</h3>

          <div className="flex flex-wrap gap-8">
            {skills.frontend.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-sm text-gray-400">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <h3 className="text-xl text-gray-300 mb-6">Backend</h3>

          <div className="flex flex-wrap gap-8">
            {skills.backend.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-sm text-gray-400">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DATABASE */}
        <div>
          <h3 className="text-xl text-gray-300 mb-6">Database</h3>

          <div className="flex flex-wrap gap-8">
            {skills.database.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-sm text-gray-400">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
