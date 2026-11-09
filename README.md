# Portafolio · Gisselle Barreto

Sitio personal de Software Engineer (frontend). Next.js 16, React 19, Tailwind 4, shadcn/ui.

Incluye tema claro/oscuro (oscuro por defecto), español/inglés, secciones Welcome · Sobre mí · Proyectos · Skills · Contacto, CV descargable y formulario de contacto con reCAPTCHA v3 y toasts.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn/ui
- Vitest + Testing Library
- Yarn 4
- reCAPTCHA v3 + Web3Forms / FormSubmit (contacto)
- Sonner (toasts)

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
  lib/                 # utils + reCAPTCHA
public/
  cv/                  # PDF del CV
  hero/                # visual del hero
  profile/             # foto de perfil
```

## Desarrollo

```bash
yarn
cp .env.example .env.local   # opcional: keys reales de reCAPTCHA v3
yarn dev
```

Abrí [http://127.0.0.1:3000](http://127.0.0.1:3000).

Sin keys en `.env.local`, el contacto usa las [keys de prueba de Google](https://developers.google.com/recaptcha/docs/faq) (siempre pasan).

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

Para el deploy: si usás Vercel, el CD lo hace Vercel al pushear. Configurá en Vercel:

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (gratis en [web3forms.com](https://web3forms.com); la access key es pública y se usa desde el navegador)

Las keys de reCAPTCHA deben ser **v3** y el dominio de Vercel (más `localhost` / `127.0.0.1` si las usás local) tiene que estar en la [consola de reCAPTCHA](https://www.google.com/recaptcha/admin).

## Contenido editable

- **Textos UI (ES/EN):** `src/i18n/dictionaries.ts` — fuente principal de copy, proyectos, skills y contacto.
- **Perfil / assets / email:** `src/features/home/constants/content.ts` (nombre, role, email, paths, links).
- **CV PDF:** `public/cv/gisselle-barreto.pdf` — reemplazá el archivo manteniendo el nombre.
- **Foto:** `public/profile/gisselle-barreto.jpg`
- **Hero:** `public/hero/portfolio-devices-mac-crop.png`

Los proyectos listados (Admin Portal, Business Portal, Design System Web) son de uso interno; Business Portal puede enlazar a una superficie corporativa visible. No se expone código ni datos de cliente.

## Contacto

El formulario verifica reCAPTCHA v3 + honeypot en `/api/contact` y envía el mail desde el navegador a **Web3Forms** (`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`). El plan free de Web3Forms no permite envíos desde el servidor de Vercel. Feedback con toasts (Sonner).

## Preferencias

Tema e idioma se guardan en `localStorage` (`portfolio-theme`, `portfolio-locale`). Sin preferencia previa, el tema por defecto es oscuro. El layout aplica el tema antes del hydrate para evitar flash.
