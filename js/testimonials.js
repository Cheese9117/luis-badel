(function () {
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('testimonialsPrev');
  const nextBtn = document.getElementById('testimonialsNext');
  const dotsWrap = document.getElementById('testimonialsDots');

  if (!track || !prevBtn || !nextBtn || !dotsWrap) return;

  const slides = Array.from(track.children);

  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Ir a la opinión ${index + 1}`);
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.children);
  const AUTOPLAY_DELAY = 4000;
  let autoplayTimer = null;

  function getStep() {
    const slide = slides[0];
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || '0');
    return slide.getBoundingClientRect().width + gap;
  }

  function getCurrentIndex() {
    return Math.round(track.scrollLeft / getStep());
  }

  function scrollToSlide(index) {
    const lastIndex = slides.length - 1;
    const target = index > lastIndex ? 0 : index < 0 ? lastIndex : index;
    track.scrollTo({ left: getStep() * target, behavior: 'smooth' });
  }

  function updateDots() {
    const index = getCurrentIndex();
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = window.setInterval(() => {
      scrollToSlide(getCurrentIndex() + 1);
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
    scrollToSlide(getCurrentIndex() - 1);
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    stopAutoplay();
    scrollToSlide(getCurrentIndex() + 1);
    startAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      scrollToSlide(index);
      startAutoplay();
    });
  });

  track.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateDots);
  }, { passive: true });

  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);
  track.addEventListener('touchstart', stopAutoplay, { passive: true });
  track.addEventListener('touchend', startAutoplay, { passive: true });

  updateDots();
  startAutoplay();
})();
