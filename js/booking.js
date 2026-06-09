(function () {
  const form = document.getElementById('bookingForm');
  const WHATSAPP_NUMBER = '573167302467';

  if (!form) return;

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
      `Fecha: ${date}\n` +
      `Hora: ${time}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();
