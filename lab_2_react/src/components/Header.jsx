function Header({ name, age, contacts }) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{age} років</p>
      <address>
        <ul>
          {contacts.map((c) => (
            <li key={c.label}>
              {c.label}: {c.href ? <a href={c.href}>{c.text}</a> : c.text}
            </li>
          ))}
        </ul>
      </address>
    </header>
  )
}

export default Header
