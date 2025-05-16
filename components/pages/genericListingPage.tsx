import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { YStack, Text, Image, Button, XStack } from 'tamagui'
import { items } from '@/assets/dummydata/_data'
import { getFavorites, setFavorite } from '@/hooks/useFavourites'

type ListingPageProps = {
  categoryId: string
  showFavoritesOnly?: boolean
}

const ListingPage = ({ categoryId, showFavoritesOnly = false }: ListingPageProps) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({})

  useEffect(() => {
    async function loadFavorites() {
      const favs = await getFavorites()
      setFavorites(favs)
    }
    loadFavorites()
  }, [])

  const categoryItems = items.filter((item) => item.categoryId === categoryId)
  const displayedItems = showFavoritesOnly
    ? categoryItems.filter((item) => favorites[item.id])
    : categoryItems

  const toggleFavorite = async (id: string) => {
    const newFavStatus = !favorites[id]
    setFavorites((prev) => ({ ...prev, [id]: newFavStatus }))
    await setFavorite(id, newFavStatus)
  }

  return (
    <YStack flex={1} p="$4" space="$4" backgroundColor="#000000">
      <Text fontSize="$6" fontWeight="bold" mb="$2" color="#fff">
        {showFavoritesOnly ? `Meine ${categoryId}` : categoryId}
      </Text>

      {displayedItems.length === 0 ? (
        <Text color="#fff">Keine Einträge.</Text>
      ) : (
        <FlatList
          data={displayedItems}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <YStack height={12} />}
          renderItem={({ item }) => (
            <YStack
              flexDirection="row"
              borderWidth={1}
              borderColor="#333"
              borderRadius={10}
              overflow="hidden"
              backgroundColor="#121212"
              padding={8}
              alignItems="center"
            >
              {item.image && (
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  height={80}
                  width={80}
                  borderRadius={10}
                  resizeMode="cover"
                  mr={12}
                />
              )}
              <XStack flex={1} justifyContent="space-between" alignItems="center">
                <Text fontWeight="600" fontSize="$4" flexShrink={1} color="#fff">
                  {item.name}
                </Text>
                <Button
                  onPress={() => toggleFavorite(item.id)}
                  size="$3"
                  borderRadius={20}
                  backgroundColor={favorites[item.id] ? '#e74c3c' : '#555'}
                  themeInverse
                >
                  {favorites[item.id] ? '★' : '☆'}
                </Button>
              </XStack>
            </YStack>
          )}
        />
      )}
    </YStack>
  )
}

export default ListingPage
