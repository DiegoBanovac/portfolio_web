const entries = [
  {
    degree: "Bachelor Degree",
    school: "University of Applied Sciences of Rijeka",
    year: "2022 – 2025",
    desc: "Computer Science",
    status: "completed",
  },
  {
    degree: "Master Degree",
    school: "University of Applied Sciences of Rijeka",
    year: "2025 – 2027",
    desc: "Study of Information Technologies in Business System",
    status: "ongoing",
  },
]

const Education = () => (
  <section
    id="education"
    className="min-h-screen flex flex-col justify-center px-16 md:px-32 bg-black"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Education
    </h2>
    <div className="w-16 h-0.5 bg-white/20 mb-14" />

    {/* TIMELINE */}
    <div className="relative max-w-2xl">

      {/* VERTICAL LINE */}
      <div
        className="absolute left-4 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.15) 90%, transparent)" }}
      />

      <div className="flex flex-col gap-12">
        {entries.map(({ degree, school, year, desc, status }) => (
          <div key={degree} className="flex gap-8 relative">

            {/* DOT */}
            <div className="relative flex-shrink-0 flex flex-col items-center" style={{ width: "2rem" }}>
              <div
                className={`w-3 h-3 rounded-full mt-1.5 ring-2 z-10 ${
                  status === "ongoing"
                    ? "bg-white ring-white/40"
                    : "bg-white/30 ring-white/15"
                }`}
              />
            </div>

            {/* CARD */}
            <div
              className={`flex-1 rounded-2xl border p-6 transition-all duration-300 group
                ${status === "ongoing"
                  ? "border-white/20 bg-white/[0.04]"
                  : "border-white/10 bg-transparent"
                }`}
            >
              {/* TOP ROW */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-white text-lg font-semibold leading-snug">
                    {degree}
                  </h3>
                  <p className="text-gray-400 text-sm mt-0.5">{school}</p>
                </div>

                {/* YEAR BADGE */}
                <span
                  className={`text-xs px-3 py-1 rounded-full whitespace-nowrap border mt-0.5
                    ${status === "ongoing"
                      ? "bg-white/10 text-white/80 border-white/20"
                      : "bg-white/5 text-gray-500 border-white/10"
                    }`}
                >
                  {year}
                </span>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>

              {status === "ongoing" && (
                <div className="flex items-center gap-2 mt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                  <span className="text-xs text-white/40 tracking-wide uppercase">In progress</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Education
