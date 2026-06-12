(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const navbar = document.getElementById('navbar');

  // Oculta el logo si la imagen no carga
  document.querySelectorAll('.logo__img').forEach((img) => {
    img.addEventListener('error', () => img.remove());
  });

  // Cierra el menú móvil desplegable y resetea el botón hamburguesa
  const closeMobileNav = () => {
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  // Navbar scroll effect — transparente en el tope, sólido tras 50px de scroll
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
      closeMobileNav();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu toggle
  if (toggle && nav) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('no-scroll', isOpen);
    });

    nav.querySelectorAll('a:not(.nav__link--parent)').forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Cierra el menú al tocar fuera del panel o del botón hamburguesa
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      closeMobileNav();
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
        if (window.innerWidth <= 991) {
          e.preventDefault();
          item.classList.toggle('is-open');
        }
      });
    }
  });
})();
