import AsyncStorage from '@react-native-async-storage/async-storage'

const FAVORITES_KEY = 'favorites'

export async function getFavorites(): Promise<Record<string, boolean>> {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY)
    return jsonValue != null ? JSON.parse(jsonValue) : {}
  } catch (e) {
    console.error('Fehler beim Laden der Favoriten:', e)
    return {}
  }
}

export async function setFavorite(id: string, isFav: boolean) {
  try {
    const favorites = await getFavorites()
    favorites[id] = isFav
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  } catch (e) {
    console.error('Fehler beim Speichern des Favoriten:', e)
  }
}
