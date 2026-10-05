import { useEffect, useState } from 'react'
import { FORMSPREE_URL } from '../config'

const inputClass =
  'mt-1 w-full rounded-md border border-slate-300 p-2 font-normal dark:border-slate-600 dark:bg-slate-900'

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)

  // Відкриваємо через 1 хвилину, якщо користувач ще не закрив вікно в цій сесії
  useEffect(() => {
    if (sessionStorage.getItem('feedbackClosed')) return
    const timer = setTimeout(() => setIsOpen(true), 60000)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    sessionStorage.setItem('feedbackClosed', '1')
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/55 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-slate-800">
        <h2 className="mb-2 text-2xl font-semibold text-slate-700 dark:text-slate-200">Зворотний зв'язок</h2>
        <form action={FORMSPREE_URL} method="POST" className="space-y-3">
          <label className="block text-sm font-semibold">
            Ім'я
            <input type="text" name="name" required className={inputClass} />
          </label>
          <label className="block text-sm font-semibold">
            Email
            <input type="email" name="email" required className={inputClass} />
          </label>
          <label className="block text-sm font-semibold">
            Телефон
            <input type="tel" name="phone" className={inputClass} />
          </label>
          <label className="block text-sm font-semibold">
            Повідомлення
            <textarea name="message" rows="4" required className={inputClass} />
          </label>
          <div className="flex gap-2">
            <button type="submit" className="rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">
              Надіслати
            </button>
            <button type="button" onClick={close} className="rounded-md bg-slate-500 px-4 py-2 text-white hover:bg-slate-600">
              Закрити
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
