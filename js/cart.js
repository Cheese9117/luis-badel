(function () {
  const STORAGE_KEY = 'luisbadel_cart';
  const WHATSAPP_NUMBER = '573167302467';

  const toggle = document.getElementById('cartToggle');
  const badge = document.getElementById('cartBadge');
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  const closeBtn = document.getElementById('cartClose');
  const list = document.getElementById('cartList');
  const emptyMessage = document.getElementById('cartEmpty');
  const clearBtn = document.getElementById('cartClear');
  const checkoutLink = document.getElementById('cartCheckout');
  const addButtons = document.querySelectorAll('[data-cart-add]');

  if (!toggle || !drawer || !list) return;

  function loadCart() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (error) {
      return {};
    }
  }

  function saveCart(cart) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }

  let cart = loadCart();

  function getItemCount() {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  }

  function buildWhatsAppMessage() {
    const lines = Object.entries(cart).map(
      ([name, quantity]) => `• ${name} x${quantity}`
    );
    const intro = window.luisbadelI18n.t('cart.whatsappIntro');
    return `${intro}\n\n${lines.join('\n')}`;
  }

  function render() {
    const entries = Object.entries(cart);

    list.innerHTML = '';
    emptyMessage.hidden = entries.length > 0;
    list.hidden = entries.length === 0;

    entries.forEach(([name, quantity]) => {
      const item = document.createElement('li');
      item.className = 'cart-drawer__item';

      const itemName = document.createElement('span');
      itemName.className = 'cart-drawer__item-name';
      itemName.textContent = name;

      const controls = document.createElement('div');
      controls.className = 'cart-drawer__item-controls';

      const decreaseBtn = document.createElement('button');
      decreaseBtn.type = 'button';
      decreaseBtn.className = 'cart-drawer__qty-btn';
      decreaseBtn.textContent = '−';
      decreaseBtn.setAttribute('aria-label', window.luisbadelI18n.format('cart.decreaseAria', { name }));
      decreaseBtn.addEventListener('click', () => updateQuantity(name, -1));

      const qty = document.createElement('span');
      qty.className = 'cart-drawer__qty';
      qty.textContent = String(quantity);

      const increaseBtn = document.createElement('button');
      increaseBtn.type = 'button';
      increaseBtn.className = 'cart-drawer__qty-btn';
      increaseBtn.textContent = '+';
      increaseBtn.setAttribute('aria-label', window.luisbadelI18n.format('cart.increaseAria', { name }));
      increaseBtn.addEventListener('click', () => updateQuantity(name, 1));

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'cart-drawer__remove';
      removeBtn.setAttribute('aria-label', window.luisbadelI18n.format('cart.removeAria', { name }));
      removeBtn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
      removeBtn.addEventListener('click', () => removeItem(name));

      controls.append(decreaseBtn, qty, increaseBtn, removeBtn);
      item.append(itemName, controls);
      list.appendChild(item);
    });

    const count = getItemCount();
    badge.textContent = String(count);
    badge.hidden = count === 0;

    const hasItems = count > 0;
    clearBtn.disabled = !hasItems;
    checkoutLink.classList.toggle('is-disabled', !hasItems);
    checkoutLink.setAttribute('aria-disabled', String(!hasItems));
    checkoutLink.href = hasItems
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`
      : `https://wa.me/${WHATSAPP_NUMBER}`;

    saveCart(cart);
  }

  function updateQuantity(name, delta) {
    const next = (cart[name] || 0) + delta;
    if (next <= 0) {
      delete cart[name];
    } else {
      cart[name] = next;
    }
    render();
  }

  function removeItem(name) {
    delete cart[name];
    render();
  }

  function openDrawer() {
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('cart-open');
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('cart-open');
  }

  toggle.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  clearBtn.addEventListener('click', () => {
    cart = {};
    render();
  });

  checkoutLink.addEventListener('click', (event) => {
    if (getItemCount() === 0) {
      event.preventDefault();
    }
  });

  addButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const name = button.dataset.productName;
      cart[name] = (cart[name] || 0) + 1;
      render();
      openDrawer();
    });
  });

  document.addEventListener('luisbadel:langchange', render);

  render();
})();
