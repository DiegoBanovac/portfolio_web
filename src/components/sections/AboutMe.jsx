const AboutMe = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center px-16 md:px-32 bg-black text-white"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      About Me
    </h2>

    <div className="w-16 h-[6px] bg-white/20 mb-10" />

    <div className="max-w-2xl space-y-6 text-gray-300 text-lg leading-relaxed">
      <p>
        I’m a full-stack developer building complete web experiences from backend logic to frontend design.
      </p>

      <p>
        I build modern web applications from front to back, focusing on clean UI, solid backend logic, and smooth user experiences.
      </p>

      <p>
        Currently focused on projects that combine performance, design, and scalability.
      </p>
    </div>
  </section>
)

export default AboutMe