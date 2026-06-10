(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const navbar = document.getElementById('navbar');

  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Dropdown toggle en móvil
  document.querySelectorAll('.nav__item--dropdown').forEach(function(item) {
    var parent = item.querySelector('.nav__link--parent');
    if (!parent) return;
    parent.addEventListener('click', function(e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        item.classList.toggle('is-open');
      }
    });
  });
})();
