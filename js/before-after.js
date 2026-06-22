(function () {
  const sliders = document.querySelectorAll('.before-after__slider');

  sliders.forEach((slider) => {
    let dragging = false;

    const setPercent = (clientX) => {
      const rect = slider.getBoundingClientRect();
      const ratio = (clientX - rect.left) / rect.width;
      const percent = Math.min(100, Math.max(0, ratio * 100));
      slider.style.setProperty('--ba-percent', `${percent}%`);
      slider.setAttribute('aria-valuenow', String(Math.round(percent)));
    };

    const onPointerMove = (event) => {
      if (!dragging) return;
      setPercent(event.clientX);
    };

    const stopDragging = () => {
      dragging = false;
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', stopDragging);
    };

    slider.addEventListener('pointerdown', (event) => {
      dragging = true;
      setPercent(event.clientX);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', stopDragging);
    });

    slider.addEventListener('keydown', (event) => {
      const current = parseFloat(slider.style.getPropertyValue('--ba-percent')) || 50;
      const step = 5;

      if (event.key === 'ArrowLeft') {
        const next = Math.max(0, current - step);
        slider.style.setProperty('--ba-percent', `${next}%`);
        slider.setAttribute('aria-valuenow', String(Math.round(next)));
        event.preventDefault();
      } else if (event.key === 'ArrowRight') {
        const next = Math.min(100, current + step);
        slider.style.setProperty('--ba-percent', `${next}%`);
        slider.setAttribute('aria-valuenow', String(Math.round(next)));
        event.preventDefault();
      }
    });
  });
})();
