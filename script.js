(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const header = document.querySelector('.site-header');
  const progressBar = document.querySelector('.scroll-progress span');
  const toast = document.querySelector('.toast');

  let storedTheme = null;
  try { storedTheme = localStorage.getItem('portfolio-theme'); } catch { storedTheme = null; }
  const initialTheme = storedTheme || 'dark';
  root.dataset.theme = initialTheme;

  function updateThemeLabel() {
    if (!themeButton) return;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    themeButton.setAttribute('aria-label', `Switch to ${next} theme`);
  }
  updateThemeLabel();

  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('portfolio-theme', root.dataset.theme); } catch { /* Storage may be unavailable in local previews. */ }
    updateThemeLabel();
  });

  navToggle?.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    navMenu?.classList.toggle('open', !isOpen);
  });

  navMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      navToggle?.setAttribute('aria-label', 'Open navigation');
    });
  });

  function handleScroll() {
    const scrollTop = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;
    header?.classList.toggle('scrolled', scrollTop > 12);
  }
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-35% 0px -58% 0px', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
  }

  document.querySelector('.copy-email')?.addEventListener('click', async (event) => {
    const email = event.currentTarget.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast('Email address copied');
    } catch {
      const temp = document.createElement('textarea');
      temp.value = email;
      temp.setAttribute('readonly', '');
      temp.style.position = 'fixed';
      temp.style.opacity = '0';
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
      showToast('Email address copied');
    }
  });

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
