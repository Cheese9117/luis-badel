(function () {
  const elements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || elements.length === 0) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
})();

(function () {
  const progressBar = document.getElementById('scrollProgress');
  const backToTop = document.getElementById('backToTop');

  if (!progressBar && !backToTop) {
    return;
  }

  const updateOnScroll = () => {
    const scrollTop = window.scrollY;

    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    }

    if (backToTop) {
      backToTop.classList.toggle('is-visible', scrollTop > 480);
    }
  };

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', updateOnScroll, { passive: true });
  updateOnScroll();
})();
