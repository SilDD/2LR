import React, {useEffect, useState} from 'react'
import {Alert,} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useRouter, useLocalSearchParams} from 'expo-router'
import {
    YStack,
    Text,
    Image,
    Button,
    ScrollView,
    Sheet,
    Checkbox,
    XStack
} from 'tamagui'
import {items} from '@/assets/dummydata/_data'
import GroupItem from "@/components/GroupItems";


type FavouriteGroup = {
    id: string
    name: string
    description: string
    image: string
    itemIds: string[]
}



export default function DetailPage() {
    const params = useLocalSearchParams()
    const router = useRouter()

    const [sheetOpen, setSheetOpen] = useState(false)
    const [favoriteGroups, setFavoriteGroups] = useState<FavouriteGroup[]>([])
    const [selectedGroups, setSelectedGroups] = useState<string[]>([])

    const item = items.find((item) => item.id === params.id)

    // Favoritengruppen laden
    useEffect(() => {
        const loadGroups = async () => {
            try {
                const data = await AsyncStorage.getItem('favouriteGroups')
                const parsed = data ? JSON.parse(data) : []
                if (Array.isArray(parsed)) {
                    setFavoriteGroups(parsed)
                }
            } catch (err) {
                console.warn('Fehler beim Laden der Gruppen:', err)
            }
        }

        loadGroups()
    }, [])

    // selectedGroups aktualisieren, wenn Gruppen oder Item wechseln
    useEffect(() => {
        if (!params.id) return

        const selected = favoriteGroups
            .filter(group => group.itemIds.includes(params.id as string))
            .map(group => group.id)

        setSelectedGroups(selected)
    }, [favoriteGroups, params.id])

    const toggleGroup = (groupId: string) => {
        setSelectedGroups((prev) =>
            prev.includes(groupId)
                ? prev.filter((id) => id !== groupId)
                : [...prev, groupId]
        )
    }

    const saveGroups = async () => {
        try {
            const updatedGroups = favoriteGroups.map((group) => {
                const contains = group.itemIds.includes(item!.id)
                const shouldContain = selectedGroups.includes(group.id)

                let newItemIds = [...group.itemIds]
                if (shouldContain && !contains) {
                    newItemIds.push(item!.id)
                } else if (!shouldContain && contains) {
                    newItemIds = newItemIds.filter((id) => id !== item!.id)
                }

                return {...group, itemIds: newItemIds}
            })

            await AsyncStorage.setItem('favouriteGroups', JSON.stringify(updatedGroups))
            setFavoriteGroups(updatedGroups)
            setSheetOpen(false)
            Alert.alert('Erfolg', 'Das Element wurde den ausgewählten Gruppen zugeordnet.')
        } catch (err) {
            Alert.alert('Fehler', 'Speichern fehlgeschlagen.')
        }
    }

    if (!item) {
        return (
            <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="#000" padding="$4">
                <Text color="#fff" fontSize={18}>
                    Kein Eintrag gefunden.
                </Text>
                <Button onPress={() => router.back()} mt="$4">
                    Zurück
                </Button>
            </YStack>
        )
    }

    return (

        <ScrollView contentContainerStyle={{backgroundColor: '#000', flexGrow: 1}}>
            <YStack space="$4" flex={1}>
                {item.image && (
                    <Image
                        source={{uri: item.image}}
                        alt={item.name}
                        width="100%"
                        height={200}
                        borderRadius={12}
                        resizeMode="cover"
                    />
                )}

                <Text fontSize={30} fontWeight="bold" color="#fff">
                    {item.name}
                </Text>

                {item.address && (
                    <Text fontSize={18} color="#ccc">
                        {item.address}
                    </Text>
                )}

                {/* Anzeige: In welchen Gruppen ist dieses Element? */}
                {selectedGroups.length > 0 && (
                    <YStack mt="$3">
                        <Text color="#aaa" fontSize={16} mb="$1">
                            Dieses Element ist in folgenden Gruppen:
                        </Text>
                        {favoriteGroups
                            .filter(group => selectedGroups.includes(group.id))
                            .map(group => (
                                <Text key={group.id} color="#fff" fontSize={16}>
                                    • {group.name}
                                </Text>
                            ))}
                    </YStack>
                )}

                <Button
                    onPress={() => setSheetOpen(true)}
                    mt="$6"
                    backgroundColor="#444"
                    borderRadius={10}
                >
                    Zu Favoritengruppe hinzufügen
                </Button>

                <Button onPress={() => router.back()} mt="$4" backgroundColor="#666" borderRadius={10}>
                    Zurück
                </Button>
            </YStack>

            <Sheet
                open={sheetOpen}
                onOpenChange={setSheetOpen}
                // snapPoints={[60]} // 66% der Höhe des Screens
                modal
            >
                <Sheet.Overlay/>
                <Sheet.Frame
                    padding="$4"
                    backgroundColor="#111"
                    borderTopLeftRadius={20}
                    borderTopRightRadius={20}
                    style={{
                        minHeight: '30%', // oder besser snapPoints={[66]} am Sheet selbst setzen
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Scrollbarer Bereich mit flex: 1 */}
                    <YStack
                        flex={1}
                        mb="$4"
                        overflow="scroll" // scrollbar nur für diesen Bereich
                    >
                        <Text fontSize={20} fontWeight="bold" color="#fff" mb={12}>
                            Favoritengruppen auswählen
                        </Text>

                        {favoriteGroups.map((group) => (
                            <GroupItem
                                key={group.id}
                                group={group}
                                isSelected={selectedGroups.includes(group.id)}
                                onToggle={toggleGroup}
                            />
                        ))}
                    </YStack>

                    {/* Buttons fix unten */}
                    <XStack
                        justifyContent="space-between"
                        paddingBottom={12}
                        mt="$4"
                        // evtl. noch Hintergrundfarbe, falls benötigt:
                        // backgroundColor="#111"
                    >
                        <Button onPress={() => setSheetOpen(false)} backgroundColor="#555" borderRadius={10}>
                            Abbrechen
                        </Button>
                        <Button onPress={saveGroups} backgroundColor="#0a0" borderRadius={10}>
                            Speichern
                        </Button>
                    </XStack>
                </Sheet.Frame>

            </Sheet>

        </ScrollView>
    )
}
