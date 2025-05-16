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
  {
    id: 'bar3',
    name: 'Die Tafelrunde',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80',
    categoryId: 'bars',
    favorite: false,
    address: 'Kaiserstraße 7, 12345 Musterstadt',
  },
  {
    id: 'bar4',
    name: 'Zum Alten Fass',
    image: 'https://images.unsplash.com/photo-1524492449090-49600a39b1f9?auto=format&fit=crop&w=800&q=80',
    categoryId: 'bars',
    favorite: false,
    address: 'Schlossplatz 4, 12345 Musterstadt',
  },
  {
    id: 'bar5',
    name: 'Biergarten am Fluss',
    image: 'https://images.unsplash.com/photo-1532634726-69b8ebc15d11?auto=format&fit=crop&w=800&q=80',
    categoryId: 'bars',
    favorite: false,
    address: 'Flussufer 1, 12345 Musterstadt',
  },
  {
    id: 'bar6',
    name: 'Nachtschwärmer',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    categoryId: 'bars',
    favorite: false,
    address: 'Nachtweg 10, 12345 Musterstadt',
  },
  {
    id: 'bar7',
    name: 'Cocktail Lounge',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80',
    categoryId: 'bars',
    favorite: false,
    address: 'Barstraße 8, 12345 Musterstadt',
  },
  {
    id: 'bar8',
    name: 'Zum Roten Hahn',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    categoryId: 'bars',
    favorite: false,
    address: 'Hahnweg 3, 12345 Musterstadt',
  },
  {
    id: 'bar9',
    name: 'Happy Hour Bar',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80',
    categoryId: 'bars',
    favorite: false,
    address: 'Glückstraße 11, 12345 Musterstadt',
  },
  {
    id: 'bar10',
    name: 'The Whiskey Den',
    image: 'https://images.unsplash.com/photo-1532634726-69b8ebc15d11?auto=format&fit=crop&w=800&q=80',
    categoryId: 'bars',
    favorite: false,
    address: 'Denweg 5, 12345 Musterstadt',
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
  {
    id: 'cafe3',
    name: 'Latte Land',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cafes',
    favorite: false,
    address: 'Kaffeegasse 2, 12345 Musterstadt',
  },
  {
    id: 'cafe4',
    name: 'Espresso Ecke',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cafes',
    favorite: false,
    address: 'Röstereiweg 9, 12345 Musterstadt',
  },
  {
    id: 'cafe5',
    name: 'Bohnen & Blätter',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cafes',
    favorite: false,
    address: 'Blattstraße 3, 12345 Musterstadt',
  },
  {
    id: 'cafe6',
    name: 'Kaffeekunst',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cafes',
    favorite: false,
    address: 'Kunstweg 7, 12345 Musterstadt',
  },
  {
    id: 'cafe7',
    name: 'Café Morgentau',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cafes',
    favorite: false,
    address: 'Morgenstraße 12, 12345 Musterstadt',
  },
  {
    id: 'cafe8',
    name: 'Kaffeeklatsch',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cafes',
    favorite: false,
    address: 'Plaudergasse 5, 12345 Musterstadt',
  },
  {
    id: 'cafe9',
    name: 'Bohnenladen',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cafes',
    favorite: false,
    address: 'Kaffeegasse 8, 12345 Musterstadt',
  },
  {
    id: 'cafe10',
    name: 'Café Sonnenschein',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    categoryId: 'cafes',
    favorite: false,
    address: 'Sonnenweg 6, 12345 Musterstadt',
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
  {
    id: 'club3',
    name: 'Neon Nights',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
    categoryId: 'clubs',
    favorite: false,
    address: 'Lichterstraße 5, 12345 Musterstadt',
  },
  {
    id: 'club4',
    name: 'Bass House',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    categoryId: 'clubs',
    favorite: false,
    address: 'Beatweg 12, 12345 Musterstadt',
  },
  {
    id: 'club5',
    name: 'Electric Pulse',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
    categoryId: 'clubs',
    favorite: false,
    address: 'Elektrostraße 3, 12345 Musterstadt',
  },
  {
    id: 'club6',
    name: 'Midnight Groove',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    categoryId: 'clubs',
    favorite: false,
    address: 'Grooveweg 9, 12345 Musterstadt',
  },
  {
    id: 'club7',
    name: 'Bassline Club',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
    categoryId: 'clubs',
    favorite: false,
    address: 'Bassstraße 1, 12345 Musterstadt',
  },
  {
    id: 'club8',
    name: 'The Drop',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    categoryId: 'clubs',
    favorite: false,
    address: 'Dropweg 4, 12345 Musterstadt',
  },
  {
    id: 'club9',
    name: 'Rave Room',
    image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80',
    categoryId: 'clubs',
    favorite: false,
    address: 'Ravestraße 10, 12345 Musterstadt',
  },
  {
    id: 'club10',
    name: 'Electric Dreams',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    categoryId: 'clubs',
    favorite: false,
    address: 'Traumweg 2, 12345 Musterstadt',
  },

  // Events (deine vorhandenen plus 8 weitere kannst du analog ergänzen)
  {
    id: 'event1',
    name: 'Sommerfest 2025',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    categoryId: 'events',
    favorite: false,
    address: 'Festplatz, 12345 Musterstadt',
  },
  // weitere Events ...
]
