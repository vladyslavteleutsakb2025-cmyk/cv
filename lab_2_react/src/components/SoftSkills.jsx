function SoftSkills({ skills }) {
  return (
    <section id="soft-skills">
      <h2>Soft Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.title}>
            <strong>{skill.title}</strong>, {skill.text}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SoftSkills
