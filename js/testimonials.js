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
    dot.addEventListener('click', () => scrollToSlide(index));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.children);

  function getStep() {
    const slide = slides[0];
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || '0');
    return slide.getBoundingClientRect().width + gap;
  }

  function scrollToSlide(index) {
    track.scrollTo({ left: getStep() * index, behavior: 'smooth' });
  }

  function updateDots() {
    const index = Math.round(track.scrollLeft / getStep());
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  }

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: getStep(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateDots);
  }, { passive: true });

  updateDots();
})();
