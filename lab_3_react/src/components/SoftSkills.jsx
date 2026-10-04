function SoftSkills({ skills }) {
  return (
    <section id="soft-skills" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg md:col-span-2">
      <h2 className="mb-3 border-b-2 border-sky-500 pb-1 text-2xl font-semibold text-slate-700">Soft Skills</h2>
      <ul className="grid gap-3 md:grid-cols-2">
        {skills.map((skill) => (
          <li key={skill.title} className="rounded-lg bg-slate-50 p-3 hover:bg-sky-50">
            <strong className="font-semibold text-sky-700">{skill.title}</strong>, {skill.text}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SoftSkills
