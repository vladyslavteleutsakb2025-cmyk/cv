function Header({ name, age, contacts }) {
  return (
    <header className="bg-slate-700 px-6 py-10 text-white shadow-md">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-wide sm:text-5xl">{name}</h1>
        <p className="mt-1 text-lg italic opacity-80">{age} років</p>
        <address className="mt-4 not-italic">
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {contacts.map((c) => (
              <li key={c.label}>
                {c.label}:{' '}
                {c.href ? (
                  <a href={c.href} className="text-sky-300 underline-offset-4 hover:underline focus:outline-2 focus:outline-sky-300">
                    {c.text}
                  </a>
                ) : (
                  c.text
                )}
              </li>
            ))}
          </ul>
        </address>
      </div>
    </header>
  )
}

export default Header
