'use strict';

(function () {
  const items = Array.from(document.querySelectorAll('.gallery__item'));
  if (items.length === 0) return;

  const i18n = window.luisbadelI18n;
  const t = (key, fallback) => (i18n ? i18n.t(key) : fallback);

  const slides = items.map((item) => {
    const img = item.querySelector('img');
    const caption = item.querySelector('figcaption');
    return {
      src: img.currentSrc || img.src,
      alt: img.alt,
      caption: caption ? caption.textContent.trim() : '',
    };
  });

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = `
    <button type="button" class="lightbox__arrow lightbox__arrow--prev">
      <svg viewBox="0 0 10 16" width="14" height="22" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 1 2 8l7 7"/></svg>
    </button>
    <figure class="lightbox__figure">
      <img class="lightbox__img" src="" alt="">
      <figcaption class="lightbox__caption"></figcaption>
    </figure>
    <button type="button" class="lightbox__arrow lightbox__arrow--next">
      <svg viewBox="0 0 10 16" width="14" height="22" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m1 1 7 7-7 7"/></svg>
    </button>
    <button type="button" class="lightbox__close">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
    </button>
  `;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector('.lightbox__img');
  const captionEl = overlay.querySelector('.lightbox__caption');
  const closeBtn = overlay.querySelector('.lightbox__close');
  const prevBtn = overlay.querySelector('.lightbox__arrow--prev');
  const nextBtn = overlay.querySelector('.lightbox__arrow--next');

  let currentIndex = 0;
  let lastFocused = null;

  function updateLabels() {
    closeBtn.setAttribute('aria-label', t('lightbox.close', 'Cerrar imagen'));
    prevBtn.setAttribute('aria-label', t('lightbox.prev', 'Imagen anterior'));
    nextBtn.setAttribute('aria-label', t('lightbox.next', 'Imagen siguiente'));
  }

  function updateItemLabels() {
    items.forEach((item, index) => {
      const openLabel = t('lightbox.open', 'Ampliar imagen');
      item.setAttribute('aria-label', slides[index].caption ? `${slides[index].caption} — ${openLabel}` : openLabel);
    });
  }

  function render() {
    const slide = slides[currentIndex];
    imgEl.src = slide.src;
    imgEl.alt = slide.alt;
    captionEl.textContent = slide.caption;
  }

  function open(index, trigger) {
    currentIndex = index;
    lastFocused = trigger || document.activeElement;
    render();
    updateLabels();
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    closeBtn.focus();
  }

  function close() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lastFocused) lastFocused.focus();
  }

  function show(delta) {
    currentIndex = (currentIndex + delta + slides.length) % slides.length;
    render();
  }

  items.forEach((item, index) => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');

    item.addEventListener('click', () => open(index, item));
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(index, item);
      }
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', () => show(-1));
  nextBtn.addEventListener('click', () => show(1));

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });

  document.addEventListener('keydown', (event) => {
    if (!overlay.classList.contains('is-open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') show(-1);
    if (event.key === 'ArrowRight') show(1);
  });

  document.addEventListener('luisbadel:langchange', () => {
    updateLabels();
    updateItemLabels();
  });

  updateItemLabels();
})();
