import React, {useEffect, useState} from 'react'
import {FlatList, Dimensions} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import {YStack, Text, Image, Button, XStack} from 'tamagui'
import {items} from '@/assets/dummydata/_data'
import {getFavorites, setFavorite} from '@/hooks/useFavourites'

type ListingPageProps = {
    categoryId: string
    showFavoritesOnly?: boolean
}

const windowWidth = Dimensions.get('window').width

// Dummy-Koordinaten für Items (id -> coordinates)
const dummyCoords: Record<
    string,
    { latitude: number; longitude: number }
> = {
    '1': {latitude: 52.5200, longitude: 13.4050}, // Berlin
    '2': {latitude: 48.1351, longitude: 11.5820}, // München
    '3': {latitude: 50.1109, longitude: 8.6821},  // Frankfurt
    '4': {latitude: 51.1657, longitude: 10.4515}, // Mitte Deutschland
    '5': {latitude: 53.5511, longitude: 9.9937},  // Hamburg
    '6': {latitude: 47.3769, longitude: 8.5417},  // Zürich
    // etc.
}

const ListingPage = ({categoryId, showFavoritesOnly = false}: ListingPageProps) => {
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
        setFavorites((prev) => ({...prev, [id]: newFavStatus}))
        await setFavorite(id, newFavStatus)
    }

    // Items mit Dummy-Koordinaten für Map-Marker
    const mapMarkers = displayedItems.filter((item) => dummyCoords[item.id])

    const initialRegion = {
        latitude: mapMarkers.length ? dummyCoords[mapMarkers[0].id].latitude : 52.52,
        longitude: mapMarkers.length ? dummyCoords[mapMarkers[0].id].longitude : 13.405,
        latitudeDelta: 1,
        longitudeDelta: 1,
    }

    return (
        <YStack flex={1} p="$4" space="$4" backgroundColor="#000000">
            {/* DummyBox oben */}
            <YStack
                height={120}
                backgroundColor="#222"
                justifyContent="center"
                alignItems="center"
                mb={16}
                borderRadius={12}
                overflow="hidden"  // sehr wichtig, damit die Ecken gerundet angezeigt werden
            >
                <MapView
                    style={{width: windowWidth - 32, height: 180}}
                    initialRegion={initialRegion}
                    showsUserLocation={false}
                    loadingEnabled
                    mapType="standard"
                >
                    {mapMarkers.map((item) => (
                        <Marker
                            key={item.id}
                            coordinate={dummyCoords[item.id]!}
                            title={item.name}
                        />
                    ))}
                </MapView>
            </YStack>


            {/*<Text fontSize="$6" fontWeight="bold" mb="$2" color="#fff">*/}
            {/*    {showFavoritesOnly ? `Meine ${categoryId}` : categoryId}*/}
            {/*</Text>*/}


            {displayedItems.length === 0 ? (
                <Text color="#fff">Keine Einträge.</Text>
            ) : (
                <FlatList
                    data={displayedItems}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <YStack height={12}/>}
                    renderItem={({item}) => (
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
                                    source={{uri: item.image}}
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
