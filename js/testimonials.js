(function () {
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('testimonialsPrev');
  const nextBtn = document.getElementById('testimonialsNext');
  const dotsWrap = document.getElementById('testimonialsDots');

  if (!track || !prevBtn || !nextBtn || !dotsWrap) return;

  const slides = Array.from(track.children);
  const AUTOPLAY_DELAY = 3500;
  const RESIZE_DEBOUNCE = 200;

  let dots = [];
  let totalPages = 1;
  let autoplayTimer = null;
  let resizeTimer = null;

  function getMaxScroll() {
    return track.scrollWidth - track.clientWidth;
  }

  function getCurrentPage() {
    const maxScroll = getMaxScroll();
    if (maxScroll <= 0 || totalPages <= 1) return 0;
    const ratio = track.scrollLeft / maxScroll;
    return Math.min(totalPages - 1, Math.round(ratio * (totalPages - 1)));
  }

  function scrollToPage(page) {
    const target = page > totalPages - 1 ? 0 : page < 0 ? totalPages - 1 : page;
    const maxScroll = getMaxScroll();
    const left = totalPages > 1 ? (maxScroll * target) / (totalPages - 1) : 0;
    track.scrollTo({ left, behavior: 'smooth' });
  }

  function updateDots() {
    const page = getCurrentPage();
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === page));
  }

  function buildDots() {
    const step = slides[0].getBoundingClientRect().width;
    const slidesPerPage = Math.max(1, Math.round(track.clientWidth / step));
    totalPages = Math.max(1, Math.ceil(slides.length / slidesPerPage));

    dotsWrap.innerHTML = '';
    dots = slides.slice(0, totalPages).map((_, index) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Ir al grupo de opiniones ${index + 1}`);
      dot.addEventListener('click', () => {
        stopAutoplay();
        scrollToPage(index);
        startAutoplay();
      });
      dotsWrap.appendChild(dot);
      return dot;
    });

    updateDots();
  }

  function startAutoplay() {
    stopAutoplay();
    if (totalPages <= 1) return;
    autoplayTimer = window.setInterval(() => {
      scrollToPage(getCurrentPage() + 1);
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  prevBtn.addEventListener('click', () => {
    stopAutoplay();
    scrollToPage(getCurrentPage() - 1);
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    stopAutoplay();
    scrollToPage(getCurrentPage() + 1);
    startAutoplay();
  });

  track.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateDots);
  }, { passive: true });

  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);
  track.addEventListener('touchstart', stopAutoplay, { passive: true });
  track.addEventListener('touchend', startAutoplay, { passive: true });

  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      stopAutoplay();
      buildDots();
      startAutoplay();
    }, RESIZE_DEBOUNCE);
  });

  buildDots();
  startAutoplay();
})();
