function Education({ items }) {
  return (
    <section id="education">
      <h2>Education</h2>
      {items.map((item) => (
        <article key={item.school}>
          <h3>{item.school}</h3>
          <p>{item.degree}</p>
          <p>{item.period}</p>
        </article>
      ))}
    </section>
  )
}

export default Education
