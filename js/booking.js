(function () {
  const form = document.getElementById('bookingForm');
  const WHATSAPP_NUMBER = '573167302467';

  if (!form) return;

  function formatDate(isoDate) {
    if (!isoDate) return '';
    const [y, m, d] = isoDate.split('-');
    return `${d}/${m}/${y}`;
  }

  function formatTime(t) {
    if (!t) return '';
    const [h, min] = t.split(':');
    const hour = parseInt(h, 10);
    const ampm = hour >= 12 ? 'p.m.' : 'a.m.';
    const h12 = hour % 12 || 12;
    return `${h12}:${min} ${ampm}`;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name    = (form.name.value || '').trim();
    const phone   = (form.phone ? form.phone.value : '').trim();
    const service = form.service.value;
    const date    = formatDate(form.date.value);
    const time    = formatTime(form.time.value);

    if (!name || !service || !form.date.value || !form.time.value) {
      const firstEmpty = [
        !name    && form.querySelector('#name'),
        !service && form.querySelector('#service'),
        !form.date.value && form.querySelector('#date'),
        !form.time.value && form.querySelector('#time'),
      ].find(Boolean);
      if (firstEmpty) firstEmpty.focus();
      return;
    }

    let message = `Hola, quiero reservar una cita en Luis Badel Sala de Belleza.\n\n`;
    message += `👤 Nombre: ${name}\n`;
    if (phone) message += `📱 Teléfono: ${phone}\n`;
    message += `✂️ Servicio: ${service}\n`;
    message += `📅 Fecha: ${date}\n`;
    message += `🕐 Hora: ${time}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
