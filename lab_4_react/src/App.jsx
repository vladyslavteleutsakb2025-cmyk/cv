import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import TechnicalSkills from './components/TechnicalSkills'
import SoftSkills from './components/SoftSkills'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

// Усі дані резюме в одному місці — їх передаємо в компоненти через props
const cv = {
  name: 'Владислав Телеуца',
  age: 19,
  contacts: [
    { label: 'Телефон', text: '+380687740774', href: 'tel:+380687740774' },
    { label: 'Email', text: 'vladyslav.teleutsa@gmail.com', href: 'mailto:vladyslav.teleutsa@gmail.com' },
    { label: 'Місто', text: 'Львів' },
  ],
  about:
    'Як студент другого курсу, я прагну здобути знання з програмування та використовувати нові технології. Я відповідальний та швидко навчаюсь, можу добре працювати з іншими в команді. Моя ціль — отримати досвід роботи в ІТ компанії та працювати над цікавими проєктами.',
  education: [
    {
      school: 'НУ «Львівська Політехніка»',
      degree: 'Cybersecurity and Information Protection',
      period: 'Currently studying (2025 – Present)',
    },
  ],
  technicalSkills: [
    { category: 'Office & Productivity', tools: 'Microsoft Office, Google Workspace.' },
    { category: 'Languages', tools: 'Python (aiogram), Java (Android).' },
    { category: 'Development', tools: 'Android Studio, Android SDK, Firebase.' },
    { category: 'OSINT & Analytics', tools: 'Data gathering, research, and analysis.' },
    { category: 'IDE & Tools', tools: 'JetBrains Suite, VS Code, Git.' },
    { category: 'OS & Administration', tools: 'Windows, macOS, Linux (Advanced CLI & virtual environments).' },
  ],
  softSkills: [
    { title: 'Емпатія', text: 'я вмію чути та надавати щиру підтримку, а не лише сухі інструкції.' },
    { title: 'Стресостійкість', text: 'зберігаю спокій та конструктив у конфліктних ситуаціях.' },
    { title: 'Технічна комунікація', text: 'вмію пояснювати складні речі простою та зрозумілою мовою.' },
    { title: 'Аналітичний підхід', text: "швидко знаходжу причинно-наслідкові зв'язки проблеми та пропоную ефективне рішення." },
    { title: 'Командність', text: 'легко адаптуюся в колективі та готовий допомагати колегам.' },
    { title: 'Adaptive Learning', text: 'миттєво опановую новий софт та внутрішні регламенти.' },
  ],
}

function App() {
  const [theme, setTheme] = useState('light')

  // Автоматична тема за часом доби: світла 07:00–21:00, інакше темна
  useEffect(() => {
    const hour = new Date().getHours()
    setTheme(hour >= 7 && hour < 21 ? 'light' : 'dark')
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div
      className={`min-h-screen bg-slate-100 font-sans text-slate-800 dark:bg-slate-900 dark:text-slate-200 ${
        theme === 'dark' ? 'dark' : ''
      }`}
    >
      <Header name={cv.name} age={cv.age} contacts={cv.contacts} theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <About text={cv.about} />
        <Education items={cv.education} />
        <TechnicalSkills skills={cv.technicalSkills} />
        <SoftSkills skills={cv.softSkills} />
        <Reviews />
      </main>
      <Footer name={cv.name} />
      <ContactForm />
    </div>
  )
}

export default App
