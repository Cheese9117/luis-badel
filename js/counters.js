(function () {
  const counters = document.querySelectorAll('[data-counter]');

  if (counters.length === 0) return;

  const DURATION = 1500;

  function formatNumber(value, decimals, thousandsSeparator) {
    const fixed = value.toFixed(decimals);

    if (!thousandsSeparator) return fixed;

    const [integerPart, decimalPart] = fixed.split('.');
    const withSeparators = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

    return decimalPart ? `${withSeparators}.${decimalPart}` : withSeparators;
  }

  function animateCounter(el) {
    const end = parseFloat(el.dataset.counterEnd);
    const decimals = parseInt(el.dataset.counterDecimals || '0', 10);
    const prefix = el.dataset.counterPrefix || '';
    const suffix = el.dataset.counterSuffix || '';
    const thousandsSeparator = el.dataset.counterThousands || '';
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = end * eased;

      el.textContent = `${prefix}${formatNumber(current, decimals, thousandsSeparator)}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
})();
