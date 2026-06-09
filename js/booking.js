(function () {
  const form = document.getElementById('bookingForm');
  const dateInput = document.getElementById('date');
  const WHATSAPP_NUMBER = '573167302467';

  if (!form) return;

  if (dateInput) {
    dateInput.addEventListener('input', () => {
      const digits = dateInput.value.replace(/\D/g, '').slice(0, 8);
      let formatted = digits;
      if (digits.length > 4) {
        formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
      } else if (digits.length > 2) {
        formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
      }
      dateInput.value = formatted;
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const service = form.service.value;
    const date = form.date.value;
    const time = form.time.value;

    const message =
      `Hola, quiero reservar una cita.\n` +
      `Nombre: ${name}\n` +
      `Servicio: ${service}\n` +
      `Fecha: ${date} (DD/MM/AAAA)\n` +
      `Hora: ${time}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
