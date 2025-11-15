const root = document.documentElement;
const body = document.body;
const toggle = document.getElementById('themeToggle');
const yearEl = document.getElementById('year');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primaryNav');

const THEME_KEY = 'astra-theme';

const setTheme = (mode) => {
  const isLight = mode === 'light';
  body.classList.toggle('light', isLight);
  root.classList.toggle('light', isLight);
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(isLight));
    toggle.querySelector('.icon').textContent = isLight ? '☀️' : '🌙';
    toggle.querySelector('.label').textContent = isLight ? 'Light' : 'Dark';
  }
  localStorage.setItem(THEME_KEY, mode);
};

const initTheme = () => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored) {
    setTheme(stored);
    return;
  }

  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  setTheme(prefersLight ? 'light' : 'dark');
};

toggle?.addEventListener('click', () => {
  const next = body.classList.contains('light') ? 'dark' : 'light';
  setTheme(next);
});

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (event) => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored) return;
  setTheme(event.matches ? 'light' : 'dark');
});

initTheme();

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

navToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('is-open');
  if (navToggle) {
    navToggle.setAttribute('aria-expanded', String(Boolean(isOpen)));
    navToggle.classList.toggle('is-active', Boolean(isOpen));
  }
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.classList.remove('is-active');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    nav?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.classList.remove('is-active');
  }
});

const ctaForm = document.querySelector('.cta-form');
ctaForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(ctaForm);
  const name = formData.get('name');
  const role = formData.get('role');

  const status = document.createElement('p');
  status.className = 'form-status';
  status.textContent = `Thanks${name ? `, ${name}` : ''}! We’ll reach out with Astra updates tailored for ${
    role || 'researchers'
  }.`;

  const existingStatus = ctaForm.querySelector('.form-status');
  existingStatus?.remove();
  ctaForm.appendChild(status);

  ctaForm.reset();
});

const resumeForm = document.querySelector('.resume-form');
resumeForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(resumeForm);
  const focusArea = formData.get('interests') || 'your target field';

  const status = document.createElement('p');
  status.className = 'form-status';
  status.textContent = `Resume received! We’ll map out skill gaps and learning goals for ${focusArea}.`;

  resumeForm.querySelector('.form-status')?.remove();
  resumeForm.appendChild(status);
  resumeForm.reset();
});
