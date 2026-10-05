// ===== Налаштування =====
const VARIANT = 20; //номер у журналі групи

// 1. Системна інформація → localStorage → футер 
function saveSystemInfo() {
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
  };
  Object.entries(info).forEach(([key, value]) => localStorage.setItem(key, String(value)));
}

function showStorage() {
  const lines = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    lines.push(`${key}: ${localStorage.getItem(key)}`);
  }
  document.getElementById('storage-info').textContent = lines.join('\n');
}

// 2. Відгуки з JSONPlaceholder
async function loadReviews() {
  const list = document.getElementById('reviews-list');
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();
    list.textContent = '';
    comments.forEach((c) => {
      const card = document.createElement('article');
      card.className = 'review';
      const title = document.createElement('h3');
      title.textContent = c.name;
      const email = document.createElement('small');
      email.textContent = c.email;
      const body = document.createElement('p');
      body.textContent = c.body;
      card.append(title, email, body);
      list.append(card);
    });
  } catch (error) {
    list.textContent = `Не вдалося завантажити відгуки: ${error.message}`;
  }
}

// 3. Модальне вікно через 1 хвилину
const modal = document.getElementById('modal');
if (!sessionStorage.getItem('feedbackClosed')) {
  setTimeout(() => { modal.hidden = false; }, 60000);
}
document.getElementById('modal-close').addEventListener('click', () => {
  modal.hidden = true;
  sessionStorage.setItem('feedbackClosed', '1'); // не відкривати знову в цій сесії
});

// 4. Тема день/ніч 
const toggle = document.getElementById('theme-toggle');
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  toggle.textContent = theme === 'dark' ? '☀️ Світла' : '🌙 Темна';
}
const hour = new Date().getHours();
let theme = hour >= 7 && hour < 21 ? 'light' : 'dark'; // день: 07:00–21:00
applyTheme(theme);
toggle.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
});

saveSystemInfo();
showStorage();
loadReviews();
