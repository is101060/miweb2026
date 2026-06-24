export type BookStatus = 'leído' | 'leyendo' | 'pendiente';

export interface Book {
  title: string;
  author: string;
  finishedDate: string; // YYYY-MM
  status: BookStatus;
  cover?: string;
  notes?: string;
  reviewSlug?: string; // si existe reseña interna
}

export const books: Book[] = [
  {
    title: 'El nombre del viento',
    author: 'Patrick Rothfuss',
    finishedDate: '2026-01',
    status: 'leído',
    cover: 'https://picsum.photos/seed/nombredelviiento/400/600',
    notes: 'Una de las mejores novelas de fantasía que he leído.',
    reviewSlug: 'el-nombre-del-viento',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    finishedDate: '2026-02',
    status: 'leído',
    cover: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
    reviewSlug: 'atomic-habits',
  },
  {
    title: 'El problema de los tres cuerpos',
    author: 'Liu Cixin',
    finishedDate: '2026-03',
    status: 'leído',
    cover: 'https://covers.openlibrary.org/b/isbn/9788466661690-L.jpg',
    notes: 'Ciencia ficción dura, muy estimulante.',
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    finishedDate: '2026-04',
    status: 'leído',
    cover: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg',
  },
  {
    title: 'Una novela que estoy leyendo',
    author: 'Autor ejemplo',
    finishedDate: '2026-06',
    status: 'leyendo',
    cover: 'https://covers.openlibrary.org/b/isbn/9780000000000-L.jpg',
  },
];
