/* ═══════════════════════════════════════════════
   BRITTANY · CYBERSECURITY PORTFOLIO
   main.js — interactions, animations, theme
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── THEME TOGGLE ── */
  const toggle = document.getElementById('themeToggle');
  const body   = document.body;
  const saved  = localStorage.getItem('theme');

  const applyTheme = (theme) => {
    body.classList.toggle('light', theme === 'light');
    if (toggle) {
      toggle.textContent = theme === 'light' ? '◑ DARK' : '◐ LIGHT';
    }
  };

  applyTheme(saved || 'dark');

  toggle?.addEventListener('click', () => {
    const next = body.classList.contains('light') ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });


  /* ── MOBILE HAMBURGER ── */
  const hamburger = document.getElementById('hamburger');
  const sidebar   = document.getElementById('sidebar');
  const overlay   = document.getElementById('sidebarOverlay');

  const openSidebar  = () => { sidebar.classList.add('open'); overlay.classList.add('open'); hamburger.classList.add('open'); };
  const closeSidebar = () => { sidebar.classList.remove('open'); overlay.classList.remove('open'); hamburger.classList.remove('open'); };

  hamburger?.addEventListener('click', () =>
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar()
  );
  overlay?.addEventListener('click', closeSidebar);

  // Close sidebar on nav link click (mobile)
  document.querySelectorAll('nav a').forEach(a =>
    a.addEventListener('click', closeSidebar)
  );


  /* ── ACTIVE NAV ON SCROLL ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.25, rootMargin: '-60px 0px -60px 0px' });

  sections.forEach(s => navObserver.observe(s));


  /* ── SCROLL REVEAL (generic .reveal elements) ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ── SKILL BARS animate on scroll ── */
  const skillBars = document.querySelectorAll('.skill-bar');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const target = bar.getAttribute('data-width') || bar.style.getPropertyValue('--target-width') || '0%';
        // Small delay cascade
        const idx = [...skillBars].indexOf(bar);
        setTimeout(() => { bar.style.width = target; }, idx * 40);
        skillObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  skillBars.forEach(bar => {
    // Store the inline width as data-width, then reset to 0 so animation fires
    const w = bar.style.width;
    bar.setAttribute('data-width', w);
    bar.style.width = '0';
    skillObserver.observe(bar);
  });


  /* ── TIMELINE items animate on scroll ── */
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        timelineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.timeline-item').forEach(el => timelineObserver.observe(el));


  /* ── SECTION CARDS stagger reveal ── */
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(
          '.project-card, .cert-card, .skill-group, .resource-card, .blog-card, .stat-card'
        );
        cards.forEach((card, i) => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          card.style.transition = `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`;
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        });
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.projects-grid, .certs-grid, .skills-grid, .resources-grid, .blog-grid, .about-stats')
    .forEach(el => cardObserver.observe(el));


  /* ── RESUME DOWNLOAD placeholder ── */
  document.getElementById('resumeBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    // Replace this href with your actual resume PDF path before deploying
    const link = document.createElement('a');
    link.href = './resume.pdf';
    link.download = 'Brittany_Resume.pdf';
    link.click();
  });


  /* ── KEYBOARD ACCESSIBILITY: skip link ── */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) closeSidebar();
  });

});
