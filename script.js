// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const legendList = document.getElementById('legendList');

if (navToggle && legendList) {
  navToggle.addEventListener('click', () => {
    const isOpen = legendList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the mobile menu after a link is tapped
  legendList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      legendList.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Highlight the legend swatch matching the section currently in view
const sections = document.querySelectorAll('main > section[id]');
const swatches = document.querySelectorAll('.legend-swatch');

if (sections.length && swatches.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          swatches.forEach((s) => {
            s.classList.toggle('is-active', s.dataset.target === id);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

// Click-to-zoom lightbox for project images
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.card__media img, .work-item__media img').forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('is-open');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('is-open');
  }
});
