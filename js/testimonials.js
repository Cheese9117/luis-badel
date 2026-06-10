(function () {
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('testimonialsPrev');
  const nextBtn = document.getElementById('testimonialsNext');
  const dotsWrap = document.getElementById('testimonialsDots');

  if (!track || !prevBtn || !nextBtn || !dotsWrap) return;

  const realSlides = Array.from(track.children);
  const total = realSlides.length;

  if (total === 0) return;

  const leadingClone = realSlides[total - 1].cloneNode(true);
  const trailingClone = realSlides[0].cloneNode(true);
  leadingClone.setAttribute('aria-hidden', 'true');
  trailingClone.setAttribute('aria-hidden', 'true');
  track.insertBefore(leadingClone, realSlides[0]);
  track.appendChild(trailingClone);

  const slides = Array.from(track.children);
  const FIRST_REAL_INDEX = 1;
  const LAST_REAL_INDEX = total;
  const AUTOPLAY_DELAY = 3500;
  const ANIMATION_DURATION = 450;

  let currentIndex = FIRST_REAL_INDEX;
  let autoplayTimer = null;
  let animationToken = 0;

  const dots = realSlides.map((_, index) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Ir a la opinión ${index + 1}`);
    dot.addEventListener('click', () => {
      stopAutoplay();
      goTo(index + FIRST_REAL_INDEX);
      startAutoplay();
    });
    dotsWrap.appendChild(dot);
    return dot;
  });

  function getStep() {
    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || '0');
    return slides[currentIndex].getBoundingClientRect().width + gap;
  }

  function jumpTo(index) {
    currentIndex = index;
    track.scrollTo({ left: getStep() * index, behavior: 'instant' });
  }

  function animateTo(target) {
    const token = ++animationToken;
    const start = track.scrollLeft;
    const change = target - start;

    if (change === 0) return;

    const startTime = performance.now();
    track.style.scrollSnapType = 'none';

    function step(now) {
      if (token !== animationToken) return;

      const progress = Math.min((now - startTime) / ANIMATION_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      track.scrollTo({ left: start + change * eased, behavior: 'instant' });

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        track.style.scrollSnapType = '';
        if (currentIndex > LAST_REAL_INDEX) {
          jumpTo(FIRST_REAL_INDEX);
        } else if (currentIndex < FIRST_REAL_INDEX) {
          jumpTo(LAST_REAL_INDEX);
        }
      }
    }

    window.requestAnimationFrame(step);
  }

  function goTo(index) {
    currentIndex = index;
    animateTo(getStep() * index);
    updateDots();
  }

  function updateDots() {
    const realIndex = (currentIndex - FIRST_REAL_INDEX + total) % total;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === realIndex));
  }

  function next() {
    goTo(currentIndex + 1);
  }

  function prev() {
    goTo(currentIndex - 1);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = window.setInterval(next, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  prevBtn.addEventListener('click', () => {
    stopAutoplay();
    prev();
    startAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    stopAutoplay();
    next();
    startAutoplay();
  });

  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);
  track.addEventListener('touchstart', stopAutoplay, { passive: true });
  track.addEventListener('touchend', startAutoplay, { passive: true });

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => jumpTo(currentIndex), 150);
  });

  jumpTo(FIRST_REAL_INDEX);
  updateDots();
  startAutoplay();
})();
