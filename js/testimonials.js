(function () {
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('testimonialsPrev');
  const nextBtn = document.getElementById('testimonialsNext');

  if (!track || !prevBtn || !nextBtn) return;

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
  const TRANSITION_MS = 500;

  let currentIndex = FIRST_REAL_INDEX;
  let autoplayTimer = null;

  function getStep() {
    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || '0');
    return slides[currentIndex].getBoundingClientRect().width + gap;
  }

  function setPosition(animate) {
    track.style.transition = animate ? `transform ${TRANSITION_MS}ms ease` : 'none';
    track.style.transform = `translateX(-${getStep() * currentIndex}px)`;

    if (!animate) {
      void track.offsetWidth;
    }
  }

  function goTo(index) {
    currentIndex = index;
    setPosition(true);
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

  track.addEventListener('transitionend', (event) => {
    if (event.propertyName !== 'transform') return;

    if (currentIndex > LAST_REAL_INDEX) {
      currentIndex = FIRST_REAL_INDEX;
      setPosition(false);
    } else if (currentIndex < FIRST_REAL_INDEX) {
      currentIndex = LAST_REAL_INDEX;
      setPosition(false);
    }
  });

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
    resizeTimer = window.setTimeout(() => setPosition(false), 150);
  });

  setPosition(false);
  startAutoplay();
})();
