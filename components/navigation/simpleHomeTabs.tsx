import React from 'react';
import { Link } from 'expo-router';
import { Tabs, Text, XStack } from 'tamagui';

export const StackHomeTabs = () => {
  const categories = [
    { id: 'bars', name: 'Bars', icon: '🍻' },
    { id: 'cafes', name: 'Cafés', icon: '☕' },
    { id: 'clubs', name: 'Clubs', icon: '🎧' },
    { id: 'events', name: 'Events', icon: '🎪' },
    { id: 'live', name: 'Live', icon: '🎤' },
    { id: 'people', name: 'People', icon: '👥' }
  ];

  return (
    <Tabs
      defaultValue="events"
      orientation="horizontal"
      flexDirection="column"
      width="100%"
      height={60}
    >
      <Tabs.List
        backgroundColor="$background"
        borderColor="$borderColor"
        borderWidth={1}
        borderRadius="$4"
      >
        <XStack flexWrap="wrap" padding="$2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/(tabs)/home/(subscreens)/${category.id}`}
              asChild
              style={{ width: '33%' }} // 3 items per row
            >
              <Tabs.Tab
                unstyled
                padding="$1.5"
                hoverStyle={{ backgroundColor: '$color3' }}
              >
                <Text fontSize="$3" textAlign="center">
                  {category.name}
                </Text>
              </Tabs.Tab>
            </Link>
          ))}
        </XStack>
      </Tabs.List>
    </Tabs>
  );
};