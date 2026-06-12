(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const navbar = document.getElementById('navbar');

  // Oculta el logo si la imagen no carga
  document.querySelectorAll('.logo__img').forEach((img) => {
    img.addEventListener('error', () => img.remove());
  });

  // Navbar scroll effect — transparente en el tope, sólido tras 50px de scroll
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu toggle
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a:not(.nav__link--parent)').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Dropdown — desktop: hover con delay para no cerrarse en el gap
  // Mobile: click toggle
  document.querySelectorAll('.nav__item--dropdown').forEach(function (item) {
    var closeTimer = null;

    function openDropdown() {
      clearTimeout(closeTimer);
      item.classList.add('is-open');
    }

    function closeDropdown() {
      closeTimer = setTimeout(function () {
        item.classList.remove('is-open');
      }, 150); // 150ms de gracia — tiempo suficiente para mover el cursor al menú
    }

    // Desktop hover
    item.addEventListener('mouseenter', openDropdown);
    item.addEventListener('mouseleave', closeDropdown);

    // Mobile click
    var parentLink = item.querySelector('.nav__link--parent');
    if (parentLink) {
      parentLink.addEventListener('click', function (e) {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          item.classList.toggle('is-open');
        }
      });
    }
  });
})();
