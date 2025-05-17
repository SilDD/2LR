import React, {useEffect, useState} from 'react'
import {Alert, Pressable, ScrollView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useRouter} from 'expo-router'

import {
    Button,
    Card,
    Input,
    Sheet,
    Text,
    XStack,
    YStack,
    Image,
} from 'tamagui'

// Beispielhafte Items
import {items} from '@/assets/dummydata/_data'

type FavouriteGroup = {
    id: string
    name: string
    description: string
    image: string
    itemIds: string[]
}

const FavouriteGroupsScreen = () => {
    const router = useRouter()

    const [groups, setGroups] = useState<FavouriteGroup[]>([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [isSheetOpen, setIsSheetOpen] = useState(false)
    const [activeGroupId, setActiveGroupId] = useState<string | null>(null)

    // Gruppen laden aus AsyncStorage
    const loadGroups = async () => {
        try {
            const data = await AsyncStorage.getItem('favouriteGroups')
            const parsed = data ? JSON.parse(data) : []
            if (Array.isArray(parsed)) {
                setGroups(parsed)
            }
        } catch (err) {
            console.warn('Fehler beim Laden der Gruppen:', err)
        }
    }

    // Gruppen speichern in AsyncStorage und State
    const saveGroups = async (updated: FavouriteGroup[]) => {
        try {
            await AsyncStorage.setItem('favouriteGroups', JSON.stringify(updated))
            setGroups(updated)
        } catch (err) {
            Alert.alert('Fehler', 'Speichern fehlgeschlagen.')
        }
    }

    // Neue Gruppe anlegen
    const addGroup = async () => {
        if (!name.trim()) {
            Alert.alert('Hinweis', 'Bitte gib einen Gruppennamen ein.')
            return
        }

        const newGroup: FavouriteGroup = {
            id: Date.now().toString(),
            name: name.trim(),
            description: description.trim(),
            image:
                'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            itemIds: [],
        }

        const updated = [...groups, newGroup]
        await saveGroups(updated)
        setName('')
        setDescription('')
        setIsSheetOpen(false)
    }

    // Gruppe löschen
    const deleteGroup = async (id: string) => {
        const updated = groups.filter(g => g.id !== id)
        await saveGroups(updated)
        if (activeGroupId === id) setActiveGroupId(null)
    }

    // Einzelnes Element aus Gruppe entfernen
    const removeItemFromGroup = async (groupId: string, itemId: string) => {
        const updatedGroups = groups.map(group => {
            if (group.id === groupId) {
                return {
                    ...group,
                    itemIds: group.itemIds.filter(id => id !== itemId),
                }
            }
            return group
        })

        await saveGroups(updatedGroups)
    }

    useEffect(() => {
        loadGroups()
    }, [])

    const activeGroup = groups.find(g => g.id === activeGroupId)

    return (
        <YStack space="$4" p="$4" flex={1} backgroundColor="#000">
            {/* Header mit Titel und Button neue Gruppe */}
            <XStack alignItems="center" justifyContent="space-between">
                <Text fontSize="$6" fontWeight="bold" color="white">
                    Favoritengruppen
                </Text>

                <Button size="$3" theme="active" onPress={() => setIsSheetOpen(true)}>
                    + Gruppe erstellen
                </Button>
            </XStack>

            {/* Liste der Gruppen */}
            {groups.map(group => (
                <Pressable
                    key={group.id}
                    onPress={() => setActiveGroupId(group.id)}
                    style={{borderRadius: 20, overflow: 'hidden'}}
                >
                    <Card
                        elevate
                        bordered
                        size="$4"
                        marginEnd={20}
                        marginVertical={10}
                        style={{borderRadius: 20, backgroundColor: '#222'}}
                    >
                        <Card.Header>
                            <XStack space="$4" alignItems="center" justifyContent="space-between">
                                <XStack space="$4" alignItems="center" flex={1}>
                                    <Image
                                        source={{uri: group.image}}
                                        style={{width: 60, height: 60, borderRadius: 12}}
                                    />

                                    <YStack flex={1}>
                                        <Text fontSize="$5" fontWeight="600" color="white">
                                            {group.name}
                                        </Text>
                                        <Text color="#ccc">{group.description}</Text>
                                    </YStack>
                                </XStack>

                                <Button
                                    size="$2"
                                    theme="red"
                                    onPress={e => {
                                        e.stopPropagation()
                                        Alert.alert('Gruppe löschen?', 'Diese Gruppe wirklich entfernen?', [
                                            {text: 'Abbrechen', style: 'cancel'},
                                            {text: 'Löschen', onPress: () => deleteGroup(group.id)},
                                        ])
                                    }}
                                >
                                    ✕
                                </Button>
                            </XStack>
                        </Card.Header>
                    </Card>
                </Pressable>
            ))}

            {/* Gruppe erstellen Sheet */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen} snapPoints={[40]} modal>
                <Sheet.Overlay>
                    <Pressable style={{flex: 1, opacity: 0}} onPress={() => setIsSheetOpen(false)}/>
                </Sheet.Overlay>

                <Sheet.Frame
                    p="$4"
                    paddingBottom="$6"
                    marginEnd="$4"
                    space="$4"
                    backgroundColor="#190061"
                    gap="$4"
                    style={{
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                    }}
                >
                    <Text fontSize="$6" fontWeight="bold" color="white">
                        Neue Gruppe erstellen
                    </Text>

                    <Input
                        placeholder="Name der Gruppe"
                        value={name}
                        onChangeText={setName}
                        backgroundColor="white"
                        color="black"
                    />

                    <Input
                        placeholder="Beschreibung"
                        value={description}
                        onChangeText={setDescription}
                        backgroundColor="white"
                        color="black"
                        multiline
                        numberOfLines={4}
                        style={{height: 100, textAlignVertical: 'top'}}
                    />

                    <Button onPress={addGroup} theme="green">
                        Gruppe speichern
                    </Button>
                </Sheet.Frame>
            </Sheet>

            {/* Aktive Gruppe Items Sheet */}
            <Sheet
                open={activeGroupId !== null}
                onOpenChange={open => {
                    if (!open) setActiveGroupId(null)
                }}
                snapPoints={[66]}
                modal
            >
                <Sheet.Overlay>
                    <Pressable style={{flex: 1, opacity: 0}} onPress={() => setActiveGroupId(null)}/>
                </Sheet.Overlay>

                <Sheet.Frame
                    backgroundColor="#190061"
                    style={{
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        overflow: 'scroll',
                    }}
                >
                    <YStack p="$4" gap="$4" flex={1}>
                        <Text fontSize="$6" fontWeight="bold" color="white" mb="$3">
                            Elemente in &quot;{activeGroup?.name}&quot;
                        </Text>

                        {activeGroup && (
                            <ScrollView style={{flex: 1}}>
                                {activeGroup.itemIds?.length === 0 && (
                                    <Text color="#ccc" fontSize={16}>
                                        Keine Elemente in dieser Gruppe.
                                    </Text>
                                )}

                                {activeGroup.itemIds?.map(itemId => {
                                    const item = items.find(i => i.id === itemId)
                                    if (!item) return null

                                    return (
                                        <Pressable
                                            key={item.id}
                                            onPress={() => {
                                                setActiveGroupId(null)
                                                router.push(`/details/${item.id}`)
                                            }}
                                        >
                                            <Card
                                                elevation="$4"
                                                bordered
                                                padding="$3"
                                                marginVertical={4}
                                                borderRadius={12}
                                                backgroundColor="#333"
                                            >
                                                <XStack alignItems="center" justifyContent="space-between">
                                                    <XStack alignItems="center" space="$3" flex={1}>
                                                        {item.image && (
                                                            <Image
                                                                source={{uri: item.image}}
                                                                style={{width: 50, height: 50, borderRadius: 8}}
                                                            />
                                                        )}
                                                        <YStack flex={1} space="$1">
                                                            <Text color="white" fontSize={16}>
                                                                {item.categoryId}
                                                            </Text>
                                                            <Text color="white" fontSize={16}>
                                                                {item.name}
                                                            </Text>
                                                        </YStack>
                                                    </XStack>

                                                    <Button
                                                        size="$2"
                                                        theme="red"
                                                        onPress={e => {
                                                            e.stopPropagation()
                                                            Alert.alert(
                                                                'Element entfernen?',
                                                                `Möchtest du "${item.name}" aus der Gruppe "${activeGroup.name}" entfernen?`,
                                                                [
                                                                    {text: 'Abbrechen', style: 'cancel'},
                                                                    {
                                                                        text: 'Entfernen',
                                                                        onPress: () => removeItemFromGroup(activeGroup.id, item.id),
                                                                    },
                                                                ]
                                                            )
                                                        }}
                                                    >
                                                        ✕
                                                    </Button>
                                                </XStack>
                                            </Card>
                                        </Pressable>
                                    )
                                })}
                            </ScrollView>
                        )}
                    </YStack>
                </Sheet.Frame>
            </Sheet>
        </YStack>
    )
}

export default FavouriteGroupsScreen
