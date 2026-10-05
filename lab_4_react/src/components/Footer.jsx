import { useEffect, useState } from 'react'

function Footer({ name }) {
  const [stored, setStored] = useState([])

  useEffect(() => {
    // 1) зберігаємо інформацію про ОС і браузер
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      vendor: navigator.vendor,
      language: navigator.language,
      languages: navigator.languages.join(', '),
      cookiesEnabled: navigator.cookieEnabled,
      online: navigator.onLine,
      cpuCores: navigator.hardwareConcurrency,
      screen: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }
    Object.entries(info).forEach(([key, value]) => localStorage.setItem(key, String(value)))

    // 2) читаємо все з localStorage для відображення
    const entries = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      entries.push([key, localStorage.getItem(key)])
    }
    setStored(entries)
  }, [])

  return (
    <footer className="bg-slate-700 py-4 text-center text-sm text-slate-200 dark:bg-slate-950">
      <p>&copy; 2026 {name}. Резюме створено в рамках лабораторної роботи №4.</p>
      <ul className="mx-auto mt-3 max-w-4xl space-y-1 px-4 text-left text-xs opacity-80">
        {stored.map(([key, value]) => (
          <li key={key} className="break-all">
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
