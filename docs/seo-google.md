# SEO de CF Intelligence — cf.app

## Configurado en el código

- Dominio canónico: `https://cf.app`. Las variantes con parámetros, como el servicio preseleccionado en contacto, apuntan a la página principal correspondiente.
- Títulos y descripciones por servicio, orientados a software empresarial, IA, automatización, consultoría TI, IoT y formación en Perú. No se añaden ubicaciones de oficinas no confirmadas.
- Metadatos renderizados en servidor, Open Graph y Twitter Cards.
- Sitemap con 17 páginas terminadas: inicio, nosotros, servicios, seis especialidades, productos, ClosetFlow, industrias, blog, tres artículos y contacto.
- Organización y sitio web vinculados mediante identificadores JSON-LD. Servicios, aplicación y artículos tienen sus tipos correspondientes; las páginas interiores incluyen BreadcrumbList.
- `/proyectos` y `/privacidad` conservan `noindex, follow` mientras tengan contenido pendiente. Se excluyen del sitemap, pero no se bloquean en robots: Google debe poder leer su `noindex`.
- Se permite el rastreo de los recursos de Next.js. `/api/` queda fuera del rastreo.
- El sitemap no utiliza fechas de modificación inventadas ni prioridades como supuesto factor de posicionamiento.
- Verificación HTML de Search Console disponible mediante `GOOGLE_SITE_VERIFICATION`.

## Activación pública pendiente

El repositorio de GitHub no publica por sí mismo este servidor Next.js. Configurar DNS, HTTPS y alojamiento de `cf.app` antes de solicitar indexación. La consulta al dominio desde la herramienta de navegación no pudo verificar que el sitio esté publicado.

En el alojamiento, antes del build:

```dotenv
SITE_URL=https://cf.app
SITE_INDEXABLE=true
```

Si se usa un entorno de pruebas, establecer `SITE_INDEXABLE=false` durante el build y durante la ejecución. Esto mantiene robots, páginas estáticas y contacto dinámico coherentes. No reutilizar un build de producción indexable como vista previa pública. `npm run dev` siempre usa `noindex`.

Seleccionar `cf.app` como dominio principal en el alojamiento y redirigir permanentemente HTTP y `www.cf.app` hacia HTTPS sin www si ambas variantes están disponibles. Esta redirección se configura en DNS/proxy/alojamiento; el código no asume acceso a esa infraestructura.

## Google Search Console

1. Acceder a https://search.google.com/search-console con la cuenta de la empresa.
2. Añadir la propiedad de dominio `cf.app` y publicar el TXT de verificación que Google proporcione en el proveedor DNS. Alternativa: propiedad de prefijo `https://cf.app/`, método etiqueta HTML y variable `GOOGLE_SITE_VERIFICATION` con solo el valor de `content`; luego recompilar.
3. Tras verificar la propiedad y publicar el sitio, enviar `https://cf.app/sitemap.xml` en Sitemaps.
4. Usar Inspección de URLs para inicio y las páginas prioritarias de servicios. Comprobar rastreo permitido, canonical y HTML renderizado antes de solicitar indexación.
5. Revisar informes de indexación, consultas, impresiones, clics y Core Web Vitals. Mejorar las páginas según las consultas reales.

Estos pasos requieren acceso a la cuenta de Google y al DNS; no se han realizado ni se ha inventado un token de verificación.

## Contenido para sostener el posicionamiento

| Página                  | Intención de búsqueda                    | Siguiente mejora editorial                                     |
| ----------------------- | ---------------------------------------- | -------------------------------------------------------------- |
| Desarrollo de software  | Desarrollo de software a medida Perú     | Ejemplos propios, alcance y criterios para elegir una solución |
| Inteligencia artificial | IA para empresas, agentes IA             | Pilotos documentados, límites y evaluación de resultados       |
| Automatización          | Automatización de procesos empresariales | Procesos concretos con reglas, excepciones e integraciones     |
| Consultoría             | Consultoría tecnológica Perú             | Explicar entregables y cómo se desarrolla un diagnóstico       |
| IoT                     | Desarrollo IoT, monitoreo remoto         | Prototipos reales y condiciones técnicas de implementación     |
| ClosetFlow              | Software de gestión comercial            | Capturas reales, disponibilidad y características verificadas  |

Publicar casos, cifras y testimonios solo con evidencia y autorización. No crear páginas casi idénticas por ciudad ni comprar enlaces. Mantener los artículos revisados por personas con conocimiento del tema y añadir fechas cuando exista una publicación real.

## Validación

```sh
npm test
npm run lint
npm run build
npm start
# En otra terminal:
npm run check:seo
npm run check:site
```

`check:seo` requiere un build de producción indexable. Comprueba sitemap, canonical, títulos únicos, robots, Googlebot, JSON-LD y exclusión de páginas pendientes. Para probar el dominio publicado, usar `CHECK_URL=https://cf.app`. Ninguna comprobación envía solicitudes a Search Console ni confirma posiciones en resultados de Google.

## Fuentes de referencia

- [Guía SEO de Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
- [Crear y enviar un sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- [Datos estructurados de organización](https://developers.google.com/search/docs/appearance/structured-data/organization).

Estas medidas facilitan rastreo y comprensión. Google decide la indexación y el posicionamiento; enviar un sitemap no garantiza inclusión ni una posición determinada.
