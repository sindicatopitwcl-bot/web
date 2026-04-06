# Sitio web — Sindicato π

Sitio estático institucional construido con React + Vite. Tema oscuro, accesible (WCAG 2.1 AA) y sin dependencias de backend.

**URL de producción:** https://sindicatopitwcl-bot.github.io/web/

## Requisitos

- Node.js 20+
- npm 9+

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build de producción

```bash
npm run build     # genera dist/
npm run preview   # sirve dist/ localmente
```

El deploy se hace automáticamente vía GitHub Actions al hacer push a `main`. La configuración está en `.github/workflows/deploy.yml`.

---

## Cómo agregar un documento

### 1. Copiar el PDF

Colocar el archivo en:

```
public/documentos/<nombre-del-archivo>.pdf
```

Convención de nombres: todo en minúsculas, palabras separadas por guiones, sin espacios ni caracteres especiales.

```
public/documentos/convenio-cct-2024-2025.pdf
public/documentos/acta-asamblea-2024.pdf
```

### 2. Editar la lista en Documents.jsx

Abrir `src/components/Documents/Documents.jsx` y localizar el array `DOCS` al inicio del archivo. Cada entrada tiene esta forma:

```js
{
  id: 7,                              // número único, correlativo
  category: 'Convenio',              // etiqueta visible (Estatutos, Convenio, Informe, Newsletter…)
  title: 'Convenio Colectivo 2024/2025',
  description: 'Descripción breve del contenido del documento.',
  date: '2024-03-01',                // fecha de publicación (YYYY-MM-DD)
  size: '3.8 MB',                    // tamaño aproximado del archivo
  pages: 72,                         // número de páginas (null si no se conoce)
  href: `${import.meta.env.BASE_URL}documentos/convenio-cct-2024-2025.pdf`,
  available: true,                   // true = muestra Vista previa + Descargar
                                     // false = muestra badge "Próximamente"
},
```

> **Importante:** el `href` debe usar `${import.meta.env.BASE_URL}documentos/...` (sin `/` al inicio) para que funcione tanto en desarrollo local como en GitHub Pages.

### 3. Verificar

Con el servidor de desarrollo corriendo (`npm run dev`), el documento aparece en la sección **Documentos y normativa**. Haciendo clic en **Vista previa** se abre el modal con el PDF embebido; **Descargar** descarga el archivo directamente.

### Documentos actuales

| Archivo | Tamaño | Estado |
|---------|--------|--------|
| `solicitud-incorporacion-sindicato-thoughtworks.pdf` | 33 KB | Disponible |
| `estatutos-sindicato-pi_junio-2020.pdf` | 252 KB | Disponible |
| `informativo-1-sindicato.pdf` | 168 KB | Disponible |
| `newsletter-1-enero-2026.pdf` | 155 KB | Disponible |
| `newsletter-2-febrero-2026.pdf` | 159 KB | Disponible |
| `newsletter-3-marzo-2026.pdf` | 174 KB | Disponible |

---

## Estructura del proyecto

```
public/
└── documentos/          ← PDFs públicos (servidos tal cual por Vite)
src/
├── theme.css            ← todas las CSS variables (colores, tipografía, espaciado)
├── App.jsx
├── hooks/
│   └── useScrollReveal.js
└── components/
    ├── Navbar/
    ├── Hero/
    ├── About/
    ├── News/
    ├── Documents/       ← lista de documentos (Documents.jsx + Documents.css)
    ├── DocumentViewer/  ← modal de vista previa PDF
    ├── Contact/
    └── Footer/
```
