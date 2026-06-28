# Fiscal Precision — CV / Portafolio

Portafolio profesional de **Natalia Daza Gómez** (Contadora Pública & Analista Contable),
construido con [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) y desplegado
automáticamente en **GitHub Pages** mediante GitHub Actions.

El sistema de diseño ("Fiscal Precision") está documentado en [`DESIGN.md`](./DESIGN.md) y se
implementa fielmente a través del tema de Tailwind en [`tailwind.config.mjs`](./tailwind.config.mjs).

🔗 **Sitio en producción:** https://Nata174410.github.io/cv

## 🧱 Stack

- **Astro 5** — generación de sitio estático.
- **Tailwind CSS 3** — utilidades + tokens del sistema de diseño.
- **Source Sans 3 / Playfair Display** — tipografías.
- **Material Symbols** — iconografía.

## 📁 Estructura

```
src/
├── data/cv.ts          # Contenido centralizado (sin datos sensibles)
├── layouts/Layout.astro # <head>, fuentes, metadatos
├── components/          # Nav, Hero, Profile, Experience, Skills, Projects, Education, Contact, Footer
├── pages/index.astro    # Composición de la página
└── styles/global.css    # Tailwind + estilos base
.github/workflows/
├── deploy.yml           # CD: build + deploy a GitHub Pages (push a main)
└── ci.yml               # CI: validación de build en cada Pull Request
```

## 🚀 Comandos

| Comando           | Acción                                            |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Instala dependencias                              |
| `npm run dev`     | Servidor de desarrollo en `http://localhost:4321/cv` |
| `npm run build`   | Compila el sitio a `./dist`                       |
| `npm run preview` | Previsualiza el build localmente                  |

## 🔄 CI/CD

Dos workflows de GitHub Actions:

- **`✅ CI`** (`ci.yml`) — en cada Pull Request a `main`, valida tipos y que el sitio compile.
- **`🚀 Deploy`** (`deploy.yml`) — en cada push a `main`, compila y publica en GitHub Pages.

### Activar GitHub Pages (una sola vez)

1. En GitHub: **Settings → Pages → Build and deployment → Source: `GitHub Actions`**.
2. Haz push a `main`. El workflow se encarga del resto.

> Si conectas un dominio propio, actualiza `site` y pon `base: '/'` en
> [`astro.config.mjs`](./astro.config.mjs).

## 📄 Hoja de vida (RenderCV)

La hoja de vida descargable (PDF) se genera con [RenderCV](https://github.com/rendercv/rendercv)
a partir de archivos YAML, en **español e inglés**:

```
rendercv/
├── cv_es.yaml   # contenido en español
├── cv_en.yaml   # contenido en inglés
└── photo.jpg    # headshot cuadrado (pre-recortado para el formato CV)
```

Los PDF resultantes se publican en `public/` y se ofrecen para descarga desde la barra de
navegación y la sección de contacto:

- `public/Natalia_Daza_CV_ES.pdf`
- `public/Natalia_Daza_CV_EN.pdf`

### Regenerar los PDF

```bash
# Requiere Python 3.12+
python3.12 -m venv .venv-rendercv
.venv-rendercv/bin/pip install "rendercv[full]"

cd rendercv
../.venv-rendercv/bin/rendercv render cv_es.yaml --pdf-path ../public/Natalia_Daza_CV_ES.pdf
../.venv-rendercv/bin/rendercv render cv_en.yaml --pdf-path ../public/Natalia_Daza_CV_EN.pdf
```

> El tema usa la misma paleta (navy/teal) y tipografía (Source Sans 3) del sitio. No incluye
> datos sensibles (sin número de teléfono).

## 🔐 Privacidad

El contenido se gestiona en [`src/data/cv.ts`](./src/data/cv.ts). Se omiten datos sensibles
(teléfono, dirección, documento); solo se exponen canales de comunicación públicos básicos
(correo y LinkedIn).
