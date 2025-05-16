import React from 'react'
import { FlatList } from 'react-native'
import { Text, YStack, Image } from 'tamagui'
import { items } from '@/assets/dummydata/_data'

const PeopleListingPage = () => {
  const peopleItems = items.filter((item) => item.categoryId === 'people')

  return (
    <YStack flex={1} p="$4" space="$4">
      <Text fontSize="$6" fontWeight="bold" mb="$2">
        Meine People
      </Text>

      <FlatList
        data={peopleItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <YStack
            mb="$3"
            borderWidth={1}
            borderColor="#ccc"
            borderRadius={10}
            overflow="hidden"
          >
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
            </YStack>
          </YStack>
        )}
      />
    </YStack>
  )
}

export default PeopleListingPage
