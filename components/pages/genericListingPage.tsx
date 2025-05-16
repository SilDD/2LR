import React from 'react'
import { View, FlatList } from 'react-native'
import { Text, YStack, Image } from 'tamagui'
import MapView, { Marker } from 'react-native-maps'
import { items, Item } from '@/assets/dummydata/_data'

interface Props {
  categoryId: string
}

const CategoryListingPage: React.FC<Props> = ({ categoryId }) => {
  // Filtere Items nach Kategorie und nur Favoriten
  const filteredItems = items.filter(
    (item) => item.categoryId === categoryId && item.favorite
  )

  return (
    <YStack flex={1} p="$4" space="$4">
      <Text fontSize="$6" fontWeight="bold" mb="$2">
        {`Meine ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`}
      </Text>

      {/*{filteredItems.length === 0 ? (*/}
      {/*  <Text>Keine Favoriten in dieser Kategorie.</Text>*/}
      {/*) : (*/}
        <>
          {/* Karte mit Markern */}
          <MapView
            style={{ height: 200, borderRadius: 10 }}
            initialRegion={{
              latitude: 52.5200, // z.B. Berlin, anpassen je nach Daten
              longitude: 13.4050,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            {items.map((item) =>
              item.address ? (
                <Marker
                  key={item.id}
                  coordinate={{
                    latitude: 52.5200 + Math.random() * 0.05, // Platzhalter, da wir keine echten Koordinaten haben
                    longitude: 13.4050 + Math.random() * 0.05,
                  }}
                  title={item.name}
                  description={item.address}
                />
              ) : null
            )}
          </MapView>

          {/* Liste der Items */}
          <FlatList
            data={filteredItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <YStack mb="$3" borderWidth={1} borderColor="#ccc" borderRadius={10} overflow="hidden">
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  height={120}
                  width="100%"
                  resizeMode="cover"
                />
                <YStack p="$3">
                  <Text fontWeight="600" fontSize="$4">
                    {item.name}
                  </Text>
                  {item.address && <Text color="#666">{item.address}</Text>}
                </YStack>
              </YStack>
            )}
          />
        </>
      {/*)}*/}
    </YStack>
  )
}

export default CategoryListingPage
