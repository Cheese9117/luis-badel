(function () {
  'use strict';

  const STORAGE_KEY = 'luisbadel_lang';
  const DEFAULT_LANG = 'es';

  const translations = {
    es: {
      'announcement.text': '✨ Agenda tu cita por WhatsApp · +57 316 7302467 · Laureles, Medellín',

      'nav.services': 'Servicios',
      'nav.gallery': 'Galería',
      'nav.products': 'Productos',
      'nav.products.all': 'Todos los productos',
      'nav.products.haircare': 'Cuidado capilar',
      'nav.products.treatments': 'Tratamientos',
      'nav.products.styling': 'Styling y acabado',
      'nav.team': 'Equipo',
      'nav.testimonials': 'Opiniones',
      'nav.booking': 'Reservar',
      'nav.location': 'Ubicación',
      'nav.faq': 'Preguntas',
      'nav.cartAria': 'Ver tu pedido',
      'nav.menuAria': 'Abrir menú',

      'hero.location': 'Laureles · Medellín',
      'hero.title': 'Realza tu belleza natural',
      'hero.subtitle': 'Cortes, color, tratamientos y peinados con más de 18 años de experiencia en el corazón de Laureles.',
      'hero.book': 'Reservar cita',
      'hero.whatsapp': 'Escribir por WhatsApp',

      'trust.reviews': 'Opiniones positivas',
      'trust.experience': 'Años de experiencia',
      'trust.clients': 'Clientes felices',
      'trust.locationLabel': 'Ubicación',

      'about.text': 'En Luis Badel Sala de Belleza combinamos técnica, tendencia y atención personalizada para que cada visita se sienta como un momento solo para ti.',

      'services.eyebrow': 'Lo que hacemos',
      'services.title': 'Nuestros servicios',
      'services.viewAll': 'Ver todos los servicios →',

      'service.haircut.title': 'Cortes',
      'service.haircut.desc': 'Cortes a la medida de tu estilo, con asesoría personalizada según tu tipo de rostro y cabello.',
      'service.haircut.price': 'Desde $35.000',

      'service.color.title': 'Color',
      'service.color.desc': 'Tintes, mechas, balayage y corrección de color con productos profesionales de alta calidad.',
      'service.color.price': 'Desde $80.000',

      'service.manicure.title': 'Manicure y pedicure',
      'service.manicure.desc': 'Cuidado completo de manos y pies, esmaltado tradicional y semipermanente.',
      'service.manicure.price': 'Desde $30.000',

      'service.treatments.title': 'Tratamientos',
      'service.treatments.desc': 'Keratina, botox capilar y tratamientos de hidratación profunda para un cabello sano.',
      'service.treatments.price': 'Desde $90.000',

      'service.styling.title': 'Peinados',
      'service.styling.desc': 'Peinados para eventos, ondas, recogidos y looks especiales para cualquier ocasión.',
      'service.styling.price': 'Desde $40.000',

      'service.barber.title': 'Barbería',
      'service.barber.desc': 'Cortes masculinos, diseño de barba y afeitado clásico con toallas calientes.',
      'service.barber.price': 'Desde $25.000',

      'gallery.eyebrow': 'Inspiración',
      'gallery.title': 'Galería',
      'gallery.alt1': 'Corte de cabello moderno realizado en el salón',
      'gallery.alt2': 'Coloración profesional con técnica de mechas',
      'gallery.alt3': 'Manicure semipermanente terminado',
      'gallery.alt4': 'Tratamiento capilar de hidratación profunda',
      'gallery.alt5': 'Peinado para evento con ondas definidas',
      'gallery.alt6': 'Corte de barbería clásico con afeitado',
      'gallery.caption1': 'Corte moderno',
      'gallery.caption2': 'Color y mechas',
      'gallery.caption3': 'Manicure semipermanente',
      'gallery.caption4': 'Tratamiento de hidratación',
      'gallery.caption5': 'Peinado para eventos',
      'gallery.caption6': 'Barbería clásica',

      'products.eyebrow': 'Para llevar',
      'products.title': 'Productos profesionales',
      'products.viewCatalog': 'Ver catálogo completo →',

      'product.badge': 'Disponible en salón',
      'product.add': 'Agregar al pedido',
      'product.consult': 'Consultar',

      'product.shampoos.name': 'Shampoos profesionales',
      'product.shampoos.desc': 'Limpieza suave para todo tipo de cabello.',

      'product.mascarillas.name': 'Mascarillas capilares',
      'product.mascarillas.desc': 'Hidratación y reparación profunda.',

      'product.aceites.name': 'Aceites y serums',
      'product.aceites.desc': 'Brillo y control del frizz.',

      'product.termo.name': 'Termoprotectores',
      'product.termo.desc': 'Protección antes del calor.',

      'product.keratina.name': 'Tratamientos keratina',
      'product.keratina.desc': 'Alisado y reestructuración capilar.',

      'product.color.name': 'Productos para color',
      'product.color.desc': 'Mantén tu color vibrante por más tiempo.',

      'team.eyebrow': 'Conócenos',
      'team.title': 'Nuestro equipo',
      'team.founder.role': 'Fundador & estilista principal',
      'team.colorist.role': 'Especialista en color',
      'team.barber.role': 'Barbero & estilista',

      'testimonials.eyebrow': 'Lo que dicen de nosotros',
      'testimonials.title': 'Opiniones',
      'testimonials.prevAria': 'Opinión anterior',
      'testimonials.nextAria': 'Opinión siguiente',

      'testimonial.1.text': '"Excelente atención y un corte exactamente como lo pedí. Definitivamente volveré."',
      'testimonial.2.text': '"El mejor salón de Laureles. El color que me hicieron quedó espectacular."',
      'testimonial.3.text': '"Muy profesionales y puntuales. El ambiente es muy agradable y relajante."',
      'testimonial.4.text': '"Mi cabello quedó increíble después del tratamiento de keratina. ¡Recomendado!"',
      'testimonial.5.text': '"Atención personalizada de principio a fin. Se nota la experiencia del equipo."',
      'testimonial.6.text': '"Excelente relación calidad-precio. Siempre salgo feliz con el resultado."',

      'booking.eyebrow': 'Agenda tu cita',
      'booking.title': 'Reservar',
      'booking.text': 'Elige el servicio, la fecha y la hora que mejor te queden, o escríbenos directamente por WhatsApp.',
      'booking.bookOnline': 'Reservar cita online',
      'booking.whatsapp': 'Escribir por WhatsApp',

      'location.eyebrow': 'Visítanos',
      'location.title': 'Ubicación y horarios',
      'location.weekdays': 'Lunes - Sábado',
      'location.sunday': 'Domingo',
      'location.closed': 'Cerrado',
      'location.viewMaps': 'Ver en Google Maps',
      'location.instagramAria': 'Instagram de Luis Badel Sala de Belleza',
      'location.facebookAria': 'Facebook de Luis Badel Sala de Belleza',

      'faq.eyebrow': 'Resolvemos tus dudas',
      'faq.title': 'Preguntas frecuentes',
      'faq.q1': '¿Necesito reservar cita o atienden por orden de llegada?',
      'faq.a1': 'Recomendamos reservar con anticipación, especialmente para color y tratamientos de keratina, para garantizar tu espacio con el especialista de tu preferencia. También recibimos clientes sin cita según disponibilidad.',
      'faq.q2': '¿Qué métodos de pago aceptan?',
      'faq.a2': 'Aceptamos efectivo, tarjetas débito y crédito, y transferencias por Nequi y Bancolombia.',
      'faq.q3': '¿Qué productos y marcas utilizan?',
      'faq.a3': 'Trabajamos con productos profesionales de alta calidad para coloración, keratina y tratamientos capilares, seleccionados para cuidar la salud de tu cabello.',
      'faq.q4': '¿Atienden a hombres y mujeres?',
      'faq.a4': 'Sí. Contamos con servicios de barbería para caballero, además de cortes, color, tratamientos, manicure y pedicure para toda la familia.',
      'faq.q5': '¿Cómo llego y hay parqueadero cerca?',
      'faq.a5': 'Estamos en la Cra. 78 #54-75, Laureles - Estadio, una zona con buena disponibilidad de parqueaderos públicos y zonas de parqueo en la calle cerca al salón.',

      'lightbox.open': 'Ampliar imagen',
      'lightbox.close': 'Cerrar imagen',
      'lightbox.prev': 'Imagen anterior',
      'lightbox.next': 'Imagen siguiente',

      'footer.tagline': 'Tu cabello merece lo mejor.',
      'footer.rights': 'Luis Badel Sala de Belleza. Todos los derechos reservados.',
      'footer.developedBy': 'Desarrollado por',

      'whatsapp.tooltip': '¿Agendamos tu cita?',
      'whatsapp.aria': 'Escribir a Luis Badel Sala de Belleza por WhatsApp',
      'backToTop.aria': 'Volver arriba',

      'cart.title': 'Tu pedido',
      'cart.closeAria': 'Cerrar pedido',
      'cart.empty': 'Aún no has agregado productos a tu pedido.',
      'cart.clear': 'Vaciar pedido',
      'cart.checkout': 'Enviar pedido por WhatsApp',
      'cart.decreaseAria': 'Quitar una unidad de {name}',
      'cart.increaseAria': 'Agregar una unidad de {name}',
      'cart.removeAria': 'Eliminar {name} del pedido',
      'cart.whatsappIntro': 'Hola, quiero hacer el siguiente pedido:',

      'productsPage.title': 'Productos profesionales',
      'productsPage.subtitle': 'Selección de productos de alta calidad disponibles en nuestro salón. Consúltanos en persona o escríbenos por WhatsApp.',
      'productsPage.category': 'Categoría',
      'productsPage.ctaTitle': '¿Buscas algo específico?',
      'productsPage.ctaText': 'Escríbenos y te asesoramos sobre el producto ideal para tu tipo de cabello.',
      'product.consultPrice': 'Consultar precio',

      'pp.1.name': 'Shampoo hidratante profesional',
      'pp.1.desc': 'Para cabello seco y dañado.',
      'pp.2.name': 'Shampoo anti-frizz',
      'pp.2.desc': 'Control de encrespamiento.',
      'pp.3.name': 'Shampoo de color',
      'pp.3.desc': 'Protege y prolonga el color.',
      'pp.4.name': 'Mascarilla de hidratación profunda',
      'pp.4.desc': 'Nutrición intensiva 1x semana.',
      'pp.5.name': 'Mascarilla de reparación',
      'pp.5.desc': 'Para cabello muy dañado.',
      'pp.6.name': 'Keratina brasileña',
      'pp.6.desc': 'Alisado progresivo hasta 4 meses.',
      'pp.7.name': 'Botox capilar',
      'pp.7.desc': 'Reestructuración sin formol.',
      'pp.8.name': 'Ampollas de proteína',
      'pp.8.desc': 'Tratamiento de choque.',
      'pp.9.name': 'Aceite de argán',
      'pp.9.desc': 'Brillo y suavidad sin residuo.',
      'pp.10.name': 'Serum anti-frizz',
      'pp.10.desc': 'Control de frizz en clima húmedo.',
      'pp.11.name': 'Termoprotector en spray',
      'pp.11.desc': 'Protección hasta 230°C.',
      'pp.12.name': 'Laca de fijación fuerte',
      'pp.12.desc': 'Para peinados duraderos.'
    },
    en: {
      'announcement.text': '✨ Book your appointment via WhatsApp · +57 316 7302467 · Laureles, Medellín',

      'nav.services': 'Services',
      'nav.gallery': 'Gallery',
      'nav.products': 'Products',
      'nav.products.all': 'All products',
      'nav.products.haircare': 'Hair care',
      'nav.products.treatments': 'Treatments',
      'nav.products.styling': 'Styling & finish',
      'nav.team': 'Team',
      'nav.testimonials': 'Reviews',
      'nav.booking': 'Book now',
      'nav.location': 'Location',
      'nav.faq': 'FAQ',
      'nav.cartAria': 'View your order',
      'nav.menuAria': 'Open menu',

      'hero.location': 'Laureles · Medellín',
      'hero.title': 'Embrace your natural beauty',
      'hero.subtitle': 'Haircuts, color, treatments and styling with over 18 years of experience in the heart of Laureles.',
      'hero.book': 'Book appointment',
      'hero.whatsapp': 'Message us on WhatsApp',

      'trust.reviews': 'Positive reviews',
      'trust.experience': 'Years of experience',
      'trust.clients': 'Happy clients',
      'trust.locationLabel': 'Location',

      'about.text': 'At Luis Badel Sala de Belleza we combine technique, trends and personalized attention so every visit feels like a moment just for you.',

      'services.eyebrow': 'What we do',
      'services.title': 'Our services',
      'services.viewAll': 'View all services →',

      'service.haircut.title': 'Haircuts',
      'service.haircut.desc': 'Custom cuts tailored to your style, with personalized advice based on your face shape and hair type.',
      'service.haircut.price': 'From $35,000 COP',

      'service.color.title': 'Color',
      'service.color.desc': 'Dyes, highlights, balayage and color correction with high-quality professional products.',
      'service.color.price': 'From $80,000 COP',

      'service.manicure.title': 'Manicure & pedicure',
      'service.manicure.desc': 'Complete hand and foot care, with traditional and gel polish options.',
      'service.manicure.price': 'From $30,000 COP',

      'service.treatments.title': 'Treatments',
      'service.treatments.desc': 'Keratin, hair botox and deep hydration treatments for healthy hair.',
      'service.treatments.price': 'From $90,000 COP',

      'service.styling.title': 'Styling',
      'service.styling.desc': 'Event styling, waves, updos and special looks for any occasion.',
      'service.styling.price': 'From $40,000 COP',

      'service.barber.title': 'Barbershop',
      'service.barber.desc': 'Men\'s haircuts, beard design and classic shaves with hot towels.',
      'service.barber.price': 'From $25,000 COP',

      'gallery.eyebrow': 'Inspiration',
      'gallery.title': 'Gallery',
      'gallery.alt1': 'Modern haircut done at the salon',
      'gallery.alt2': 'Professional color with highlights technique',
      'gallery.alt3': 'Finished gel manicure',
      'gallery.alt4': 'Deep hydration hair treatment',
      'gallery.alt5': 'Event styling with defined waves',
      'gallery.alt6': 'Classic barbershop cut with shave',
      'gallery.caption1': 'Modern haircut',
      'gallery.caption2': 'Color & highlights',
      'gallery.caption3': 'Gel manicure',
      'gallery.caption4': 'Hydration treatment',
      'gallery.caption5': 'Event styling',
      'gallery.caption6': 'Classic barbershop',

      'products.eyebrow': 'To take home',
      'products.title': 'Professional products',
      'products.viewCatalog': 'View full catalog →',

      'product.badge': 'Available in salon',
      'product.add': 'Add to order',
      'product.consult': 'Inquire',

      'product.shampoos.name': 'Professional shampoos',
      'product.shampoos.desc': 'Gentle cleansing for every hair type.',

      'product.mascarillas.name': 'Hair masks',
      'product.mascarillas.desc': 'Deep hydration and repair.',

      'product.aceites.name': 'Oils and serums',
      'product.aceites.desc': 'Shine and frizz control.',

      'product.termo.name': 'Heat protectants',
      'product.termo.desc': 'Protection before heat styling.',

      'product.keratina.name': 'Keratin treatments',
      'product.keratina.desc': 'Smoothing and hair restructuring.',

      'product.color.name': 'Color care products',
      'product.color.desc': 'Keep your color vibrant for longer.',

      'team.eyebrow': 'Meet us',
      'team.title': 'Our team',
      'team.founder.role': 'Founder & lead stylist',
      'team.colorist.role': 'Color specialist',
      'team.barber.role': 'Barber & stylist',

      'testimonials.eyebrow': 'What people say about us',
      'testimonials.title': 'Reviews',
      'testimonials.prevAria': 'Previous review',
      'testimonials.nextAria': 'Next review',

      'testimonial.1.text': '"Excellent service and a haircut exactly as I asked. I will definitely come back."',
      'testimonial.2.text': '"The best salon in Laureles. The color came out amazing."',
      'testimonial.3.text': '"Very professional and punctual. The atmosphere is pleasant and relaxing."',
      'testimonial.4.text': '"My hair looked incredible after the keratin treatment. Highly recommended!"',
      'testimonial.5.text': '"Personalized attention from start to finish. You can tell the team is experienced."',
      'testimonial.6.text': '"Excellent value for money. I always leave happy with the result."',

      'booking.eyebrow': 'Book your appointment',
      'booking.title': 'Book now',
      'booking.text': 'Choose the service, date and time that suit you best, or message us directly on WhatsApp.',
      'booking.bookOnline': 'Book online',
      'booking.whatsapp': 'Message us on WhatsApp',

      'location.eyebrow': 'Visit us',
      'location.title': 'Location & hours',
      'location.weekdays': 'Monday - Saturday',
      'location.sunday': 'Sunday',
      'location.closed': 'Closed',
      'location.viewMaps': 'View on Google Maps',
      'location.instagramAria': 'Luis Badel Sala de Belleza on Instagram',
      'location.facebookAria': 'Luis Badel Sala de Belleza on Facebook',

      'footer.tagline': 'Your hair deserves the best.',
      'footer.rights': 'Luis Badel Sala de Belleza. All rights reserved.',
      'footer.developedBy': 'Developed by',

      'whatsapp.tooltip': 'Shall we book your appointment?',
      'whatsapp.aria': 'Message Luis Badel Sala de Belleza on WhatsApp',
      'backToTop.aria': 'Back to top',

      'cart.title': 'Your order',
      'cart.closeAria': 'Close order',
      'cart.empty': 'You haven\'t added any products to your order yet.',
      'cart.clear': 'Clear order',
      'cart.checkout': 'Send order via WhatsApp',
      'cart.decreaseAria': 'Remove one unit of {name}',
      'cart.increaseAria': 'Add one unit of {name}',
      'cart.removeAria': 'Remove {name} from order',
      'cart.whatsappIntro': 'Hello, I would like to place the following order:',

      'productsPage.title': 'Professional products',
      'productsPage.subtitle': 'A selection of high-quality products available in our salon. Ask us in person or message us on WhatsApp.',
      'productsPage.category': 'Category',
      'productsPage.ctaTitle': 'Looking for something specific?',
      'productsPage.ctaText': 'Message us and we\'ll help you find the right product for your hair type.',
      'product.consultPrice': 'Inquire about price',

      'pp.1.name': 'Professional hydrating shampoo',
      'pp.1.desc': 'For dry and damaged hair.',
      'pp.2.name': 'Anti-frizz shampoo',
      'pp.2.desc': 'Frizz control.',
      'pp.3.name': 'Color shampoo',
      'pp.3.desc': 'Protects and extends color.',
      'pp.4.name': 'Deep hydration mask',
      'pp.4.desc': 'Intensive nourishment, 1x per week.',
      'pp.5.name': 'Repair mask',
      'pp.5.desc': 'For very damaged hair.',
      'pp.6.name': 'Brazilian keratin',
      'pp.6.desc': 'Progressive smoothing, lasts up to 4 months.',
      'pp.7.name': 'Hair botox',
      'pp.7.desc': 'Restructuring without formaldehyde.',
      'pp.8.name': 'Protein ampoules',
      'pp.8.desc': 'Shock treatment.',
      'pp.9.name': 'Argan oil',
      'pp.9.desc': 'Shine and softness without residue.',
      'pp.10.name': 'Anti-frizz serum',
      'pp.10.desc': 'Frizz control in humid weather.',
      'pp.11.name': 'Heat protectant spray',
      'pp.11.desc': 'Protection up to 230°C.',
      'pp.12.name': 'Strong hold hairspray',
      'pp.12.desc': 'For long-lasting hairstyles.'
    }
  };

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'es' ? stored : DEFAULT_LANG;
  }

  function t(key) {
    const lang = getLang();
    return translations[lang][key] !== undefined ? translations[lang][key] : translations[DEFAULT_LANG][key];
  }

  function format(key, params) {
    let value = t(key);
    if (!params) return value;
    Object.keys(params).forEach((paramKey) => {
      value = value.replace(`{${paramKey}}`, params[paramKey]);
    });
    return value;
  }

  function applyTranslations(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = translations[lang][key];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const map = JSON.parse(el.getAttribute('data-i18n-attr'));
      Object.entries(map).forEach(([attr, key]) => {
        const value = translations[lang][key];
        if (value !== undefined) el.setAttribute(attr, value);
      });
    });

    document.querySelectorAll('[data-lang-option]').forEach((btn) => {
      const isActive = btn.dataset.langOption === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    document.dispatchEvent(new CustomEvent('luisbadel:langchange', { detail: { lang } }));
  }

  document.querySelectorAll('[data-lang-option]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.dataset.langOption !== getLang()) setLang(btn.dataset.langOption);
    });
  });

  applyTranslations(getLang());

  window.luisbadelI18n = { getLang, setLang, t, format };
})();
