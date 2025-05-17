export type CategoryId =
    | 'bars'
    | 'cafes'
    | 'clubs'
    | 'events'
    | 'live'
    | 'people'


export interface FavoriteGroup {
  id: string
  name: string
  itemIds: string[] // Verweise auf beliebige Items, unabhängig von Kategorie
}

export const favoriteGroups: FavoriteGroup[] = [
  {
    id: 'group1',
    name: 'Partynacht',
    itemIds: ['bar2', 'club1', 'event1', 'person3']
  }
]



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
// Live
    {
        id: 'live1',
        name: 'Jazz Night mit Ella & Band',
        image: 'https://images.unsplash.com/photo-1518976024611-488f97f3b8e0?auto=format&fit=crop&w=800&q=80',
        categoryId: 'live',
        favorite: false,
        address: 'Kulturzentrum Süd, 12345 Musterstadt',
    },
    {
        id: 'live2',
        name: 'Open Mic im Alten Theater',
        image: 'https://images.unsplash.com/photo-1521336575822-6da63fb454f3?auto=format&fit=crop&w=800&q=80',
        categoryId: 'live',
        favorite: true,
        address: 'Theaterstraße 1, 12345 Musterstadt',
    },
    {
        id: 'live3',
        name: 'Straßenmusik-Festival',
        image: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?auto=format&fit=crop&w=800&q=80',
        categoryId: 'live',
        favorite: false,
        address: 'Altstadt, 12345 Musterstadt',
    },
    {
        id: 'live4',
        name: 'Klassik im Park',
        image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800&q=80',
        categoryId: 'live',
        favorite: false,
        address: 'Schlosspark, 12345 Musterstadt',
    },
    {
        id: 'live5',
        name: 'Comedy Nacht mit Max Müller',
        image: 'https://images.unsplash.com/photo-1551516594-54cb785dbf36?auto=format&fit=crop&w=800&q=80',
        categoryId: 'live',
        favorite: false,
        address: 'Kleinkunstbühne 3, 12345 Musterstadt',
    },
    {
        id: 'live6',
        name: 'Rock am Gleis',
        image: 'https://images.unsplash.com/photo-1484776363694-deb60b259669?auto=format&fit=crop&w=800&q=80',
        categoryId: 'live',
        favorite: false,
        address: 'Bahnhofsgelände, 12345 Musterstadt',
    },
    {
        id: 'live7',
        name: 'Poetry Slam',
        image: 'https://images.unsplash.com/photo-1600607686769-4fe5c3f0a78e?auto=format&fit=crop&w=800&q=80',
        categoryId: 'live',
        favorite: false,
        address: 'Literaturhaus, 12345 Musterstadt',
    },
    {
        id: 'live8',
        name: 'Improvisationstheater',
        image: 'https://images.unsplash.com/photo-1598887142489-68e0be6c57a3?auto=format&fit=crop&w=800&q=80',
        categoryId: 'live',
        favorite: false,
        address: 'Bühne Ost, 12345 Musterstadt',
    },
    {
        id: 'live9',
        name: 'Singer-Songwriter Abend',
        image: 'https://images.unsplash.com/photo-1549388604-817d15aa0110?auto=format&fit=crop&w=800&q=80',
        categoryId: 'live',
        favorite: false,
        address: 'Kulturcafé 9, 12345 Musterstadt',
    },
    {
        id: 'live10',
        name: 'Tanzperformance Urban Flow',
        image: 'https://images.unsplash.com/photo-1585829365326-b59c20ac2c7d?auto=format&fit=crop&w=800&q=80',
        categoryId: 'live',
        favorite: false,
        address: 'Tanzhalle Nord, 12345 Musterstadt',
    },
    // People
    {
        id: 'person1',
        name: 'Anna Keller – Barista & Kaffeekünstlerin',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
        categoryId: 'people',
        favorite: false,
    },
    {
        id: 'person2',
        name: 'Tobias Meier – Streetart Künstler',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
        categoryId: 'people',
        favorite: false,
    },
    {
        id: 'person3',
        name: 'DJ Luna – elektronische Beats',
        image: 'https://images.unsplash.com/photo-1599058917212-d750089bcad4?auto=format&fit=crop&w=800&q=80',
        categoryId: 'people',
        favorite: true,
    },
    {
        id: 'person4',
        name: 'Mia & Jonas – Veranstalterkollektiv „Nachtlicht“',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
        categoryId: 'people',
        favorite: false,
    },
    {
        id: 'person5',
        name: 'Lina Hofmann – Gründerin Café Sonnenschein',
        image: 'https://images.unsplash.com/photo-1614284932649-d38e1c3b71a5?auto=format&fit=crop&w=800&q=80',
        categoryId: 'people',
        favorite: false,
    },
    {
        id: 'person6',
        name: 'Benito Ruiz – Straßenmusiker',
        image: 'https://images.unsplash.com/photo-1584999734489-141b3f7e5b12?auto=format&fit=crop&w=800&q=80',
        categoryId: 'people',
        favorite: false,
    },
    {
        id: 'person7',
        name: 'Lea Wagner – Tänzerin & Choreografin',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
        categoryId: 'people',
        favorite: false,
    },
    {
        id: 'person8',
        name: 'Timur Aykan – Clubbetreiber',
        image: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=800&q=80',
        categoryId: 'people',
        favorite: false,
    },
    {
        id: 'person9',
        name: 'Sophia Engel – Kulturszene Netzwerk',
        image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
        categoryId: 'people',
        favorite: false,
    },
    {
        id: 'person10',
        name: 'Raphael Krüger – Lichtdesigner für Konzerte',
        image: 'https://images.unsplash.com/photo-1614284932649-d38e1c3b71a5?auto=format&fit=crop&w=800&q=80',
        categoryId: 'people',
        favorite: false,
    },


]
