const Contact = () => (
  <section id="contact" className="min-h-screen flex flex-col justify-center px-16 md:px-32 bg-black">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h2>
    <div className="w-16 h-0.5 bg-gray-500 mb-8" />
    <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">
      Have a project in mind or just want to say hi? Feel free to reach out.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="mailto:diego.banovac10@gmail.com"
        className="inline-block border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors w-fit text-base"
      >
        diego.banovac10@gmail.com
      </a>
      <a
        href="https://github.com/DiegoBanovac"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors w-fit text-base"
      >
        GitHub
      </a>
    </div>
  </section>
)

export default Contact
