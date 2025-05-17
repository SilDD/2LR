import React, {useEffect, useState} from 'react'
import {FlatList, Dimensions, TouchableOpacity} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import {YStack, Text, Image, XStack} from 'tamagui'
import {items} from '@/assets/dummydata/_data'
import {router} from "expo-router"

type ListingPageProps = {
    categoryId: string
    showFavoritesOnly?: boolean
}

const windowWidth = Dimensions.get('window').width

const dummyCoords: Record<
    string,
    { latitude: number; longitude: number }
> = {
    '1': {latitude: 52.5200, longitude: 13.4050},
    '2': {latitude: 48.1351, longitude: 11.5820},
    '3': {latitude: 50.1109, longitude: 8.6821},
    '4': {latitude: 51.1657, longitude: 10.4515},
    '5': {latitude: 53.5511, longitude: 9.9937},
    '6': {latitude: 47.3769, longitude: 8.5417},
}

const ListingPage = ({categoryId, showFavoritesOnly = false}: ListingPageProps) => {
    const categoryItems = items.filter((item) => item.categoryId === categoryId)
    // Falls showFavoritesOnly gebraucht wird, hier ggf. filtern

    const mapMarkers = categoryItems.filter((item) => dummyCoords[item.id])

    const initialRegion = {
        latitude: mapMarkers.length ? dummyCoords[mapMarkers[0].id].latitude : 52.52,
        longitude: mapMarkers.length ? dummyCoords[mapMarkers[0].id].longitude : 13.405,
        latitudeDelta: 1,
        longitudeDelta: 1,
    }

    return (
        <YStack flex={1} p="$4" space="$4" backgroundColor="#000000">
            <YStack
                height={120}
                backgroundColor="#222"
                justifyContent="center"
                alignItems="center"
                mb={16}
                borderRadius={12}
                overflow="hidden"
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

            {categoryItems.length === 0 ? (
                <Text color="#fff">Keine Einträge.</Text>
            ) : (
                <FlatList
                    data={categoryItems}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <YStack height={12} />}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => router.push(`/details/${item.id}`)}
                            activeOpacity={0.7}
                        >
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
                                <XStack flex={1} justifyContent="flex-start" alignItems="center">
                                    <Text fontWeight="600" fontSize="$4" flexShrink={1} color="#fff">
                                        {item.name}
                                    </Text>
                                </XStack>
                            </YStack>
                        </TouchableOpacity>
                    )}
                />
            )}
        </YStack>
    )
}

export default ListingPage
