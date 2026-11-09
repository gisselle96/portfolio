# Portafolio · Gisselle Barreto

Sitio personal de Software Engineer (frontend). Next.js 16, React 19, Tailwind 4, shadcn/ui.

Incluye tema claro/oscuro, español/inglés, secciones Welcome · Sobre mí · Proyectos · Skills · Contacto, CV descargable y formulario de contacto.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn/ui
- Vitest + Testing Library
- Yarn 4

## Estructura

```text
src/
  app/                 # App Router, layout, APIs (/api/contact, /api/cv)
  components/          # UI compartida (shadcn, SiteBackground, preferencias)
  config/              # metadata del sitio
  features/
    home/              # secciones del home + tests
    cv/                # contenido / PDF del CV
  i18n/                # diccionarios ES/EN
  layouts/             # SiteHeader / SiteFooter
  providers/           # tema + idioma (localStorage)
  lib/                 # utils
public/
  cv/                  # PDF del CV
  hero/                # visual del hero
  profile/             # foto de perfil
```


## Desarrollo

```bash
yarn
yarn dev
```

Abrí [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Scripts

| Comando | Qué hace |
| --- | --- |
| `yarn dev` | Servidor de desarrollo |
| `yarn build` / `yarn start` | Build y producción |
| `yarn test:run` | Tests (Vitest) |
| `yarn typecheck` | TypeScript |
| `yarn lint` | ESLint |
| `yarn verify` | tests + typecheck + build |

## CI

Hay un workflow de GitHub Actions (`.github/workflows/ci.yml`) que corre `yarn verify` en push/PR a `main`/`master`.

Para el deploy: si usás Vercel, el CD ya lo hace Vercel al pushear. No hace falta un pipeline de deploy aparte.

## Contenido editable

- **Textos UI (ES/EN):** `src/i18n/dictionaries.ts` — fuente principal de copy, proyectos, skills y contacto.
- **Perfil / assets / email:** `src/features/home/constants/content.ts` (nombre, role, email, paths, links).
- **CV PDF:** `public/cv/gisselle-barreto.pdf` — reemplazá el archivo manteniendo el nombre.
- **Foto:** `public/profile/gisselle-barreto.jpg`
- **Hero:** `public/hero/portfolio-devices-mac-crop.png`

Los proyectos listados (Admin Portal, Business Portal, Design System Web) son de uso interno; Business Portal puede enlazar a una superficie corporativa visible. No se expone código ni datos de cliente.

## Contacto

El formulario POST a `/api/contact` y reenvía a FormSubmit con `profile.email`. La primera vez hay que confirmar el correo en FormSubmit.

## Preferencias

Tema e idioma se guardan en `localStorage` (`portfolio-theme`, `portfolio-locale`). El layout aplica el tema antes del hydrate para evitar flash.
