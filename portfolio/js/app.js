/**
 * Application Entry & Controller
 * Orchestrates rendering, interactivity, accessible dialogs, and smooth filtering.
 */

import {
  renderHeader,
  renderHero,
  renderOverview,
  renderExperience,
  renderSkills,
  renderEducation,
  renderContact,
  renderModal,
  renderFooter
} from './components.js';

function initApp() {
  const root = document.getElementById('app');
  if (!root) return;

  // 1. Render all components
  root.innerHTML = `
    ${renderHeader()}
    <main id="main-content" role="main">
      ${renderHero()}
      ${renderOverview()}
      ${renderExperience()}
      ${renderSkills()}
      ${renderEducation()}
      ${renderContact()}
    </main>
    ${renderFooter()}
    ${renderModal()}
  `;

  // 2. Initialize Features
  initScrollProgress();
  initActiveNav();
  initExperienceFilter();
  initCopyEmail();
  initModal();
  initMobileMenu();
}

/**
 * Scroll Progress Bar
 */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/**
 * Active Navigation Spy using IntersectionObserver
 */
function initActiveNav() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

/**
 * Filter Experience Timeline by Category
 */
function initExperienceFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.experience-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (targetFilter === 'all' || cardCategory === targetFilter) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

/**
 * Copy Email to Clipboard with Accessible Feedback
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('btn-copy-email');
  const feedback = document.getElementById('copy-feedback');
  if (!copyBtn || !feedback) return;

  copyBtn.addEventListener('click', async () => {
    const email = copyBtn.getAttribute('data-email');
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older environments
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      feedback.classList.add('is-visible');
      setTimeout(() => {
        feedback.classList.remove('is-visible');
      }, 2500);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  });
}

/**
 * PDF Viewer Modal Controller
 */
function initModal() {
  const modal = document.getElementById('pdf-modal');
  const viewPdfBtn = document.getElementById('btn-view-pdf');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!modal || !viewPdfBtn || !closeBtn) return;

  function openModal(e) {
    // Only open inline modal on screens wider than 768px; on mobile open in new tab
    if (window.innerWidth > 768) {
      e.preventDefault();
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    viewPdfBtn.focus();
  }

  viewPdfBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('primary-navigation');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Auto-run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
