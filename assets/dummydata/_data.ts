export type CategoryId =
  | 'bars'
  | 'cafes'
  | 'clubs'
  | 'events'
  | 'live'
  | 'people'

export interface Item {
  id: string
  name: string
  image: string
  categoryId: CategoryId
  favorite: boolean
  address?: string  // optional mit ?
}

export const items: Item[] = [
  // Bars
  {
    id: 'bar1',
    name: 'Zum Goldenen Fass',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    categoryId: 'bars',
    favorite: false,
    address: 'Hauptstraße 12, 12345 Musterstadt',
  },
  {
    id: 'bar2',
    name: 'Die Blaue Stunde',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80',
    categoryId: 'bars',
    favorite: true,
    address: 'Marktplatz 3, 12345 Musterstadt',
  },
  // Cafés
  {
    id: 'cafe1',
    name: 'Kaffeekommune',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cafes',
    favorite: false,
    address: 'Bergstraße 5, 12345 Musterstadt',
  },
  {
    id: 'cafe2',
    name: 'Espresso Express',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cafes',
    favorite: true,
    address: 'Luisenstraße 14, 12345 Musterstadt',
  },
  // Clubs
  {
    id: 'club1',
    name: 'Club Mirage',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    categoryId: 'clubs',
    favorite: false,
    address: 'Clubstraße 1, 12345 Musterstadt',
  },
  {
    id: 'club2',
    name: 'Beat Factory',
    image: 'https://images.unsplash.com/photo-1515165562835-c2b3d6ef2d4a?auto=format&fit=crop&w=800&q=80',
    categoryId: 'clubs',
    favorite: false,
    address: 'Beatweg 7, 12345 Musterstadt',
  },
  // Events
  {
    id: 'event1',
    name: 'Sommerfest 2025',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    categoryId: 'events',
    favorite: true,
    address: 'Festplatz 10, 12345 Musterstadt',
  },
  {
    id: 'event2',
    name: 'Kunstmarkt',
    image: 'https://images.unsplash.com/photo-1515165562835-c2b3d6ef2d4a?auto=format&fit=crop&w=800&q=80',
    categoryId: 'events',
    favorite: false,
    address: 'Marktstraße 20, 12345 Musterstadt',
  },
  // Live
  {
    id: 'live1',
    name: 'Jazz Night',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    categoryId: 'live',
    favorite: false,
    address: 'Musikhalle 4, 12345 Musterstadt',
  },
  {
    id: 'live2',
    name: 'Rock Konzert',
    image: 'https://images.unsplash.com/photo-1515165562835-c2b3d6ef2d4a?auto=format&fit=crop&w=800&q=80',
    categoryId: 'live',
    favorite: true,
    address: 'Arena 1, 12345 Musterstadt',
  },
  // People (ohne Adresse)
  {
    id: 'people1',
    name: 'DJ Max',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    categoryId: 'people',
    favorite: false,
  },
  {
    id: 'people2',
    name: 'Event Organizer Anna',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    categoryId: 'people',
    favorite: false,
  }
]
