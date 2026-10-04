function TechnicalSkills({ skills }) {
  return (
    <section id="technical-skills" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      <h2 className="mb-3 border-b-2 border-sky-500 pb-1 text-2xl font-semibold text-slate-700">Technical Skills</h2>
      <ul className="list-disc space-y-2 pl-5">
        {skills.map((skill) => (
          <li key={skill.category}>
            {skill.category}: <strong className="font-semibold text-slate-900">{skill.tools}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TechnicalSkills
