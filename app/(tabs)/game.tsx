import React from 'react'
import { Dimensions } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { YStack, Text, Image, Card } from 'tamagui'
import { items, Item } from '@/assets/dummydata/_data'

const { width, height } = Dimensions.get('window')

// Filter: alle außer People
const swipeItems = items.filter(item => item.categoryId !== 'people')

const SwipeCards = () => {
  return (
    <YStack
      flex={1}
      alignItems="center"
      backgroundColor="transparent"
    >
      <Swiper
        cards={swipeItems}
        cardIndex={0}
        stackSize={3}

        backgroundColor="transparent"
        animateCardOpacity
        verticalSwipe={false}
        onSwiped={(cardIndex) => {
          console.log('Card geswiped:', swipeItems[cardIndex]?.name)
        }}
        onSwipedLeft={(cardIndex) => {
          console.log('Swiped Left:', swipeItems[cardIndex]?.name)
        }}
        onSwipedRight={(cardIndex) => {
          console.log('Swiped Right:', swipeItems[cardIndex]?.name)
        }}
        renderCard={(card: Item | null) => {
          if (!card) return null
          return (
            <Card
                paddingTop={0}
              bordered
              borderColor="#AAABB8"
              elevate
              width={width - 32}
              height={height * 0.6}
              borderRadius={20}
              overflow="hidden"
            >
              <Image
                source={{ uri: card.image }}
                height={height * 0.4}
                width="100%"
                resizeMode="cover"
              />
              <YStack p="$3" flex={1} justifyContent="center">
                <Text fontSize="$6" fontWeight="bold">
                  {card.name}
                </Text>
                <Text fontSize="$3" color="#666">
                  {card.address || 'Keine Adresse'}
                </Text>
              </YStack>
            </Card>
          )
        }}
      />
    </YStack>
  )
}

export default SwipeCards
