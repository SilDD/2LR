import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, Pressable} from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import { useLocalSearchParams } from 'expo-router'
import { XStack, Text,  useTheme, View } from 'tamagui'


import People from '@/components/tabs/people'
import Live from '@/components/tabs/live'
import Events from '@/components/tabs/events'
import Bars from '@/components/tabs/bars'
import Cafes from '@/components/tabs/cafes'
import Clubs from '@/components/tabs/clubs'

const initialLayout = { width: Dimensions.get('window').width }

const routes = [
  { key: 'bars', title: 'Bars' },
  { key: 'cafes', title: 'Cafés' },
  { key: 'clubs', title: 'Clubs' },
  { key: 'events', title: 'Events' },
  { key: 'live', title: 'Live' },
  { key: 'people', title: 'People' },
]

const renderScene = SceneMap({
  bars: Bars,
  cafes: Cafes,
  clubs: Clubs,
  events: Events,
  live: Live,
  people: People,
})

export default function SwipeTabs() {
  const theme = useTheme()
  const params = useLocalSearchParams()
  const tab = params.tab
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (typeof tab === 'string') {
      const newIndex = routes.findIndex((r) => r.key === tab)
      if (newIndex !== -1) {
        setIndex(newIndex)
      }
    }
  }, [tab])

  const renderTabBar = (props: any) => (
    <View
      width="100%"
      borderBottomWidth={1}
      borderColor="$borderColor"
      backgroundColor="$background"
      paddingHorizontal="$4"
      paddingVertical="$2"
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <XStack space="$4" alignItems="center">
          {props.navigationState.routes.map((route: any, i: number) => {
            const active = i === props.navigationState.index
            return (
              <Pressable key={route.key} onPress={() => setIndex(i)}>
                <Text
                  fontSize="$5"
                  fontWeight={active ? 'bold' : 'normal'}
                  color={active ? theme.color.get() : '#888'}
                  borderBottomWidth={active ? 2 : 0}
                  borderColor="$color"
                  paddingBottom="$1"
                >
                  {route.title}
                </Text>
              </Pressable>
            )
          })}
        </XStack>
      </ScrollView>
    </View>
  )

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      lazy
      removeClippedSubviews
    />
  )
}
