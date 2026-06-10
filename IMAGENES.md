# Imágenes reales de Instagram — pendiente

Se intentó obtener imágenes reales desde el perfil de Instagram
[@luisbadelsaladebelleza](https://www.instagram.com/luisbadelsaladebelleza/) usando:

1. `https://www.instagram.com/luisbadelsaladebelleza/?__a=1&__d=dis` → respuesta vacía (HTTP 201, sin cuerpo).
2. `https://www.instagram.com/api/v1/users/web_profile_info/?username=luisbadelsaladebelleza` → HTTP 429 (rate limited / requiere sesión).
3. Fetch del HTML del perfil → Instagram devuelve un shell genérico de la SPA sin `og:image` ni JSON embebido (`window._sharedData`); requiere JavaScript y/o autenticación para cargar el contenido real.

Ninguno de los métodos sin autenticación expone las fotos del perfil. Los placeholders actuales en
`assets/images/` (`foto-hero.jpg`, `foto-1.jpg`–`foto-6.jpg`) se mantienen sin cambios.

## Acción manual recomendada

1. Ir a https://www.instagram.com/luisbadelsaladebelleza/
2. Descargar al menos 7 fotos representativas (interior del salón, trabajos de cabello, equipo).
3. Reemplazar los archivos en `assets/images/`:
   - `foto-hero.jpg` (1600×900 aprox., foto principal del local)
   - `foto-1.jpg` … `foto-6.jpg` (800×600 aprox., galería)
4. Hacer commit y push de los nuevos archivos.
