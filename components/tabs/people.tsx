import React from 'react'
import { FlatList, Pressable } from 'react-native'
import { Text, YStack, Image } from 'tamagui'
import { useRouter } from 'expo-router'
import { items } from '@/assets/dummydata/_data'

const PeopleListingPage = () => {
  const router = useRouter()
  const peopleItems = items.filter((item) => item.categoryId === 'people')

  return (
    <YStack flex={1} p="$4" space="$4" backgroundColor="#000">
      <Text fontSize="$6" fontWeight="bold" mb="$2" color="#fff">
        Meine People
      </Text>

      <FlatList
        data={peopleItems}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <YStack height={12} />}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/details/${item.id}`)}>
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
              <Image
                source={{ uri: item.image }}
                alt={item.name}
                height={80}
                width={80}
                borderRadius={10}
                resizeMode="cover"
                mr={12}
              />
              <Text fontWeight="600" fontSize="$4" color="#fff" flexShrink={1}>
                {item.name}
              </Text>
            </YStack>
          </Pressable>
        )}
      />
    </YStack>
  )
}

export default PeopleListingPage
