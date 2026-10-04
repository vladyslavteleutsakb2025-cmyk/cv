function About({ text }) {
  return (
    <section id="about" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg md:col-span-2">
      <h2 className="mb-3 border-b-2 border-sky-500 pb-1 text-2xl font-semibold text-slate-700">About Me</h2>
      <p className="leading-relaxed">{text}</p>
    </section>
  )
}

export default About
