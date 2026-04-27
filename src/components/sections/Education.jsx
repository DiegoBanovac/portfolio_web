const entries = [
  {
    degree: 'Your Degree',
    school: 'Your University',
    year: '2020 – 2024',
    desc: 'Brief description of your studies and focus areas.',
  },
]

const Education = () => (
  <section id="education" className="min-h-screen flex flex-col justify-center px-16 md:px-32 bg-black">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
    <div className="w-16 h-0.5 bg-gray-500 mb-8" />
    <div className="flex flex-col gap-8 max-w-2xl">
      {entries.map(({ degree, school, year, desc }) => (
        <div key={degree} className="border-l-2 border-gray-600 pl-6">
          <p className="text-gray-500 text-sm mb-1">{year}</p>
          <h3 className="text-white text-xl font-semibold">{degree}</h3>
          <p className="text-gray-400 text-base mb-2">{school}</p>
          <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Education
