# Verificación de la versión inicial

Fecha: 29 de septiembre de 2026.

## Comprobado

- `npm run build`: correcto, sin advertencias en la compilación final.
- `npm run lint`: correcto, sin errores ni advertencias.
- `npm run typecheck`: correcto.
- `npm test`: cuatro pruebas de validación correctas. En esta sesión Windows requirió ejecutar el proceso de pruebas fuera del sandbox.
- `npm run check:site`: 19 páginas de contenido y 20 recursos enlazados respondieron correctamente.
- Cada página tiene un H1, título, descripción e idioma `es-PE` en el HTML servido.
- Verificados favicon, tarjeta Open Graph PNG, sitemap, robots y respuesta 404.
- Verificados rechazos de API: origen externo (403), campos inválidos (422), JSON inválido (400), honeypot (400), carga excesiva (413) y recepción sin configurar (503).
- El formulario no anuncia recepción ni permite envío mientras falte su configuración.

## Pendiente

- Revisión visual en navegador, interacciones y tamaños de pantalla reales. Las herramientas disponibles no encontraron un navegador conectado y no permitieron abrir el navegador integrado.
- Medición Lighthouse. No se atribuyen puntuaciones a esta versión.
- Prueba de entrega de extremo a extremo al configurar el CRM real.
- Validación de canonical, sitemap y Schema.org con el dominio definitivo. La vista previa permanece sin indexación.
- Revisión y sustitución de la identidad provisional, privacidad y material ilustrativo del producto.

## Repetir comprobaciones HTTP

Con el servidor local iniciado:

```powershell
npm run check:site
```

Solo para una vista previa sin webhook configurado, puede comprobarse además la respuesta de recepción no disponible:

```powershell
$env:CHECK_CONTACT_UNCONFIGURED='true'
npm run check:site
```

La comprobación no entrega consultas válidas cuando no se activa esa opción. `CHECK_URL` permite cambiar el origen de la vista previa.
