El CV se genera desde src/features/cv/constants/content.ts:
- /api/cv?photo=1&lang=es|en  → CV con foto (botón "Descargar CV")
- /api/cv?lang=es|en          → CV para ATS, sin foto

gisselle-barreto.pdf es una copia estática de la versión con foto en español,
para que los links viejos a /cv/gisselle-barreto.pdf sigan funcionando.
Si cambiás content.ts, regenerala descargando /api/cv?photo=1 y reemplazando este archivo.
