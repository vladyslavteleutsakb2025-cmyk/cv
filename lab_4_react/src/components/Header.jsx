function Header({ name, age, contacts, theme, onToggleTheme }) {
  return (
    <header className="bg-emerald-700 dark:bg-emerald-950 px-6 py-10 text-white shadow-md">
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
        <button
          type="button"
          onClick={onToggleTheme}
          className="mt-4 rounded-full border border-white/70 px-4 py-1 text-sm transition hover:bg-white/20"
        >
          {theme === 'dark' ? '☀️ Світла тема' : '🌙 Темна тема'}
        </button>
      </div>
    </header>
  )
}

export default Header
