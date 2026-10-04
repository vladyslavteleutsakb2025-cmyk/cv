function Education({ items }) {
  return (
    <section id="education" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <h2 className="mb-3 border-b-2 border-sky-500 pb-1 text-2xl font-semibold text-slate-700">Education</h2>
      {items.map((item) => (
        <article key={item.school}>
          <h3 className="text-lg font-semibold text-slate-900">{item.school}</h3>
          <p>{item.degree}</p>
          <p className="text-sm text-slate-500">{item.period}</p>
        </article>
      ))}
    </section>
  )
}

export default Education
