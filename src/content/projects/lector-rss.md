---
title: "Lector RSS minimalista"
description: "Una app web para leer feeds RSS sin distracciones, construida con Astro y SQLite."
tag: "Web"
emoji: "📡"
url: "https://github.com/tu-usuario/lector-rss"
image: "https://picsum.photos/seed/proyecto-rss/1200/600"
stack: ["Astro", "SQLite", "Tailwind CSS", "TypeScript"]
status: "activo"
---

El problema que quería resolver era simple: todos los lectores de RSS que probé eran o demasiado complejos, o demasiado lentos, o tenían demasiados botones. Quería algo que se sintiera como leer un libro, no como usar un dashboard.

## El problema

Los lectores RSS modernos como Feedly o Inoreader están bien, pero asumen que quieres gestionar cientos de feeds, etiquetar artículos, sincronizar entre dispositivos y compartir contenido. Yo solo quería leer.

Después de buscar alternativas más simples y no encontrar nada que me convenciera, decidí construir la mía.

## La solución

Una app web local que corre en tu máquina. Sin cuentas, sin sincronización en la nube, sin tracking. Los feeds se guardan en una base de datos SQLite local y la interfaz es deliberadamente mínima: una columna con los artículos, tipografía cómoda, modo oscuro.

## Cómo funciona

1. Agregas los feeds que quieres seguir desde un archivo de configuración
2. La app los refresca cada hora en segundo plano
3. Lees en orden cronológico inverso, igual que siempre

```ts
// Agregar un feed nuevo
const feed = await addFeed({
  url: 'https://example.com/rss.xml',
  name: 'Example Blog',
});
```

## Lo que aprendí

Construir esto me enseñó más sobre SQLite de lo que esperaba. Es sorprendente lo rápido que puede ser para casos de uso como este. También me obligó a pensar mucho en qué características *no* incluir, que es más difícil que decidir qué sí poner.

## Estado actual

La app funciona bien para uso personal. Planeo agregar soporte para exportar a OPML y un modo de lectura sin conexión, pero sin prisa.
