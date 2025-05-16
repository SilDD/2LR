import React from 'react'
import { FlatList } from 'react-native'
import { Text, YStack, Image, XStack } from 'tamagui'
import { items } from '@/assets/dummydata/_data'

const PeopleListingPage = () => {
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
        )}
      />
    </YStack>
  )
}

export default PeopleListingPage
