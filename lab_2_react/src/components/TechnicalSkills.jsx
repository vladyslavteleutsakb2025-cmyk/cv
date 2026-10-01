function TechnicalSkills({ skills }) {
  return (
    <section id="technical-skills">
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.category}>
            {skill.category}: <strong>{skill.tools}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TechnicalSkills
