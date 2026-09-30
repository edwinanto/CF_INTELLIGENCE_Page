# CF Intelligence

Sitio corporativo en español construido con Next.js App Router, React, TypeScript y Tailwind CSS. Identidad oscura con acento lima, componentes reutilizables y contenido separado de la presentación.

## Desarrollo

Se recomienda Node.js 24 y npm. Las pruebas TypeScript usan la ejecución nativa de Node.js y requieren Node.js 22.18 o superior.

```sh
npm ci
npm run dev
```

Abre http://localhost:3000. Es una aplicación Node.js; Laragon/Apache no ejecuta Next.js directamente.

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

## Contenido y estructura

- `docs/arquitectura.md`: definición previa de sitemap, identidad, contenido y componentes.
- `src/lib/content.ts`: servicios, productos, agentes, industrias, metodología y preguntas frecuentes.
- `src/lib/articles.ts`: artículos editoriales y categorías del blog.
- `src/components`: navegación, diagramas, módulos, filtros y formulario.
- `src/app/[slug]/page.tsx`: páginas corporativas y servicios prerenderizados.
- `src/app/blog/[slug]`: artículos prerenderizados.
- `src/app/api/contacto`: recepción validada y adaptador para CRM.
- `src/app/globals.css`: tokens, componentes y ajustes responsive.

Incluye 19 páginas de contenido, página 404, sitemap, robots, favicon y tarjeta Open Graph. La navegación de agentes admite teclado. El blog permite buscar sin distinguir acentos y filtrar por categoría. Los diagramas son SVG/CSS originales; la maqueta de ClosetFlow está identificada como ilustrativa.

## Configuración para publicar

Copia `.env.example` a `.env.local` en desarrollo o define las variables en tu alojamiento:

| Variable                | Uso                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| `SITE_URL`              | Dominio público HTTPS verificado, sin barra final. Activa canonical, URLs de Schema.org y sitemap. |
| `CONTACT_WEBHOOK_URL`   | Endpoint HTTPS privado de recepción de consultas.                                                  |
| `CONTACT_WEBHOOK_TOKEN` | Token enviado mediante `Authorization: Bearer` si el receptor lo requiere.                         |
| `CONTACT_PRIVACY_READY` | `true` tras completar la información legal real de `/privacidad`.                                  |

Sin `SITE_URL`, el sitio indica `noindex` y robots bloquea la indexación de la vista previa. Reconstruye después de configurar el dominio, porque las páginas y metadatos se generan durante el build.

### Contrato del formulario

El receptor recibe JSON con `name`, `company`, `role`, `email`, `phone`, `service`, `message`, `consent`, `source` y `submittedAt`. Debe devolver un estado HTTP 2xx **solo después de aceptar de forma duradera la consulta**. Un timeout o error del receptor devuelve un mensaje de error al visitante; no se simula un envío exitoso. Evitar logs de datos personales en el receptor.

Validación compartida cliente/servidor, comprobación de origen, límite de 16 KB, honeypot y límite temporal por correo en cada proceso. Para varias instancias o tráfico público, añadir rate limiting compartido en el proxy o proveedor. Si se reintenta tras un timeout, el receptor debe gestionar posibles duplicados.

El formulario está deshabilitado hasta configurar el webhook y completar la privacidad. La vista previa no envía datos a terceros. El texto legal es informativo y está pendiente de los datos del responsable; no pretende ser una política legal final.

### Datos que debe proporcionar la empresa

- Logo oficial para sustituir la marca tipográfica provisional.
- Dominio definitivo.
- Razón social, domicilio, canal para ejercer derechos, conservación y proveedores de datos.
- Destino de consultas y configuración de CRM.
- Material autorizado de proyectos y casos. No se han inventado cifras, clientes ni testimonios.
- Capturas reales y alcance comercial validado de ClosetFlow.

Los agentes se presentan como plataforma en desarrollo. Agricultura se presenta como innovación en exploración. No hay cuentas, pagos, portales ficticios ni enlaces vacíos.

## Despliegue

Ejecutar `npm ci`, `npm run build` y `npm start` en un servicio con runtime Node.js. Configurar HTTPS y proxy hacia el puerto 3000. El formulario necesita servidor; no utilizar exportación estática completa. El dominio y las variables privadas se configuran en el servidor, nunca con prefijo `NEXT_PUBLIC_` para secretos.

La instalación sigue el [App Router de Next.js](https://nextjs.org/docs/app/getting-started/installation). Las dependencias resueltas están fijadas en `package-lock.json`.

## Verificación

Las pruebas unitarias cubren validación, consentimiento, servicios permitidos, campos inválidos y límites. La compilación verifica TypeScript y generación de rutas. Los objetivos Lighthouse del brief requieren medición sobre el despliegue final; no se anuncian puntuaciones sin medirlas.
