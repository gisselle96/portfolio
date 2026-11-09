# Portafolio · Gisselle Barreto

Sitio personal de Frontend Engineer en Next.js + React + shadcn/ui.

## Estructura

```text
src/
  app/                 # Next.js App Router
  components/ui/       # shadcn (Button, Badge, Sheet, Separator)
  config/              # config de sitio
  features/home/       # feature home (components, constants, tests)
  layouts/             # SiteHeader / SiteFooter
  lib/                 # utils compartidos
  shared/              # constantes compartidas
```

## Desarrollo

```bash
yarn
yarn dev
```

Abrí [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Tests

```bash
yarn test:run
yarn verify
```

## Contenido editable

Perfil, proyectos, case study y stack: `src/features/home/constants/content.ts`.

Sin assets ni código confidencial de clientes.
