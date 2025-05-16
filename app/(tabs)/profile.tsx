import React, { useEffect, useState } from 'react'
import { ScrollView, ActivityIndicator, Pressable } from 'react-native'
import { YStack, XStack, Text, Image } from 'tamagui'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'
import { items, Item } from '@/assets/dummydata/_data'

const tokens = {
  bg: '#000',
  textPrimary: '#fff',
  textSecondary: '#ccc',
  accent: '#9ACD32',
  chipBg: '#223322',
  chipBgPressed: '#335533',
  chipText: '#9ACD32',
  borderRadius: 15,
  padding: 12,
  margin: 16,
  imageSize: 140,
  smallImageSize: 50,
  labelFontSize: 12,
}

const Profile = () => {
  const [userName, setUserName] = useState<string | null>(null)
  const [age, setAge] = useState<number>(28)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [name, savedAge] = await Promise.all([
          AsyncStorage.getItem('userName'),
          AsyncStorage.getItem('userAge'),
        ])
        setUserName(name)
        if (savedAge) setAge(parseInt(savedAge))
      } catch (error) {
        console.error('Lade-Fehler:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Filter für Kategorien
  const favorites = items.filter((i) => i.favorite)
  const cafes = items.filter((i) => i.categoryId === 'cafes')
  const bars = items.filter((i) => i.categoryId === 'bars')
  const events = items.filter((i) => i.categoryId === 'events')

  if (loading) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor={tokens.bg}>
        <ActivityIndicator size="large" color={tokens.accent} />
      </YStack>
    )
  }

  return (
    <ScrollView contentContainerStyle={{ backgroundColor: tokens.bg, padding: tokens.padding, alignItems: 'center' }}>
      {/* Profilbild */}
      <YStack position="relative" mb={tokens.margin}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }}
          width={tokens.imageSize}
          height={tokens.imageSize}
          borderRadius={tokens.imageSize / 2}
          borderWidth={3}
          borderColor={tokens.accent}
          alt="Profilbild"
        />
        <Pressable
          onPress={() => router.push('/image-upload')}
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: tokens.bg,
            borderRadius: 20,
            padding: 6,
          }}
        >
          <Text fontSize={18} color={tokens.accent}>
            📷
          </Text>
        </Pressable>
      </YStack>

      {/* Name und Alter */}
      <XStack alignItems="center" mb={tokens.margin} space="$2">
        <Text fontSize={26} fontWeight="600" color={tokens.textPrimary}>
          {userName || 'Unbekannter Benutzer'}, {age}
        </Text>
        <Pressable
          onPress={() => router.push('/(modals)/edit-profile')}
          style={{
            backgroundColor: '#274d16',
            paddingVertical: 6,
            paddingHorizontal: 14,
            borderRadius: tokens.borderRadius,
          }}
        >
          <Text color={tokens.accent} fontSize={14}>
            Bearbeiten
          </Text>
        </Pressable>
      </XStack>

      {/* Beschreibung */}
      <Text
        fontSize={16}
        color={tokens.textSecondary}
        textAlign="center"
        mb={tokens.margin}
        maxWidth="80%"
        lineHeight={22}
      >
        Ich liebe gutes Essen, Natur und spontane Roadtrips. 🌿🚗
      </Text>

      {/* Lieblings-Cafés, Bars & Events */}
      {[
        { title: 'Lieblingscafés', data: cafes },
        { title: 'Lieblingsbars', data: bars },
        { title: 'Events', data: events },
      ].map(({ title, data }) => (
        <YStack key={title} width="100%" mb={tokens.margin}>
          <Text
            fontSize={18}
            fontWeight="600"
            color={tokens.accent}
            mb={8}
            ml={8}
          >
            {title}
          </Text>
          <XStack space="$3" px={8} flexWrap="wrap" justifyContent="flex-start">
            {data.map((item) => (
              <YStack key={item.id} alignItems="center" mr={12} mb={12}>
                <Image
                  source={{ uri: item.image }}
                  width={tokens.smallImageSize}
                  height={tokens.smallImageSize}
                  borderRadius={tokens.smallImageSize / 2}
                  alt={item.name}
                />
                <Text
                  fontSize={tokens.labelFontSize}
                  color={tokens.textSecondary}
                  maxWidth={tokens.smallImageSize}
                  textAlign="center"
                  mt={4}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
              </YStack>
            ))}
          </XStack>
        </YStack>
      ))}

      {/* Favoriten als kleine Chips */}
      <YStack width="100%" mb={tokens.margin}>
        <Text
          fontSize={18}
          fontWeight="600"
          color={tokens.accent}
          mb={8}
          ml={8}
        >
          Favoriten
        </Text>
        <XStack flexWrap="wrap" justifyContent="center" px={8} gap={10}>
          {favorites.map((fav) => (
            <Pressable key={fav.id}>
              {({ pressed }) => (
                <YStack
                  backgroundColor={pressed ? '#3a6622' : tokens.chipBg}
                  paddingVertical={6}
                  paddingHorizontal={12}
                  borderRadius={tokens.borderRadius}
                >
                  <Text
                    fontSize={14}
                    color={tokens.chipText}
                    maxWidth={100}
                    textAlign="center"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {fav.name}
                  </Text>
                </YStack>
              )}
            </Pressable>
          ))}
        </XStack>
      </YStack>
    </ScrollView>
  )
}

export default Profile
