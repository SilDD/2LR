import React, { useState } from 'react'
import { FlatList, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { YStack, XStack, Text, Button, Image } from 'tamagui'
import { items, Item } from '@/assets/dummydata/_data'

type Message = {
  id: string
  senderId: string
  text: string
  timestamp: number
}

const Communication = () => {
  // People aus Daten laden
  const people: Item[] = items.filter((item) => item.categoryId === 'people')

  // Beispiel: aktueller User (hardcoded als erstes Person)
  const currentUser = people[0]

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      senderId: people[1]?.id || 'unknown',
      text: 'Hi zusammen!',
      timestamp: Date.now() - 60000,
    },
    {
      id: 'm2',
      senderId: currentUser.id,
      text: 'Hallo! Wie läuft\'s?',
      timestamp: Date.now() - 30000,
    },
  ])

  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (input.trim() === '') return
    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      senderId: currentUser.id,
      text: input.trim(),
      timestamp: Date.now(),
    }
    setMessages((prev) => [...prev, newMessage])
    setInput('')
  }

  // Helfer: Name aus senderId holen
  const getSenderName = (id: string) => {
    return people.find((p) => p.id === id)?.name || 'Unbekannt'
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <YStack flex={1} p="$4" space="$3" backgroundColor="$background" borderRadius={20}  font-color="#fff">
        <Text fontSize="$6" fontWeight="bold" mb="$3">
          Gruppenchat
        </Text>

        {/* Teilnehmer anzeigen */}
        <XStack space="$3" mb="$4">
          {people.map((person) => (
            <YStack key={person.id} alignItems="center" borderColor="#85DCB" width={60}>
              <Image
                source={{ uri: person.image }}
                alt={person.name}
                height={50}
                width={50}
                borderRadius={25}
                borderWidth={2}

                mb="$1"
              />
            </YStack>
          ))}
        </XStack>

        {/* Chatverlauf */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 10 }}
          renderItem={({ item }) => {
            const isCurrentUser = item.senderId === currentUser.id
            return (
              <XStack
                justifyContent={isCurrentUser ? 'flex-end' : 'flex-start'}
                mb="$2"
              >
                <YStack
                  backgroundColor={isCurrentUser ? '#553D67' : '#E5E5EA'}
                  padding="$3"
                  borderRadius={10}
                  maxWidth="70%"
                >
                  {!isCurrentUser && (
                    <Text fontSize="$2" fontWeight="600" color="#333" mb="$1">
                      {getSenderName(item.senderId)}
                    </Text>
                  )}
                  <Text
                    color={isCurrentUser ? '#fff' : '#000'}
                    fontSize="$3"
                  >
                    {item.text}
                  </Text>
                </YStack>
              </XStack>
            )
          }}
        />

        {/* Eingabefeld */}
        <XStack space="$2" alignItems="center" mt="$3">
          <TextInput
            color="#fff"
            value={input}
            onChangeText={setInput}
            placeholder="Nachricht schreiben..."
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 20,
              paddingHorizontal: 15,
              height: 40,
            }}
          />
          <Button onPress={sendMessage} size="$3" borderRadius={20}>
            Senden
          </Button>
        </XStack>
      </YStack>
    </KeyboardAvoidingView>
  )
}

export default Communication
