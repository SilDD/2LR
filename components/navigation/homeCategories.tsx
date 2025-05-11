import React from 'react';
import { Link } from 'expo-router';
import { Card, H3, Text, XStack, YStack } from 'tamagui';

interface Category {
  id: string;
  name: string;
  icon: string;
}

export const HomeCategories: React.FC = () => {
  const categories: Category[] = [
    { id: 'bars', name: 'Bars', icon: '🍻' },
    { id: 'cafes', name: 'Cafés', icon: '☕' },
    { id: 'clubs', name: 'Clubs', icon: '🎧' },
    { id: 'events', name: 'Events', icon: '🎪' },
    { id: 'live', name: 'Live', icon: '🎤' },
    { id: 'people', name: 'People', icon: '👥' }
  ];

  return (
    <YStack space="$4" padding="$4">
      <H3 textAlign="center">Kategorien</H3>
      <XStack flexWrap="wrap" justifyContent="space-between" space="$3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/(tabs)/home/[subtab]/${category.id}`}
            asChild
            style={{ width: '48%' }}
          >
            <Card
              elevate
              size="$4"
              bordered
              animation="bouncy"
              hoverStyle={{ scale: 0.975 }}
              pressStyle={{ scale: 0.95 }}
            >
              <Card.Header padded>
                <Text fontSize="$8" textAlign="center">
                  {category.icon}
                </Text>
                <Text fontSize="$5" textAlign="center" marginTop="$2">
                  {category.icon} {category.name}
                </Text>
              </Card.Header>
            </Card>
          </Link>
        ))}
      </XStack>
    </YStack>
  );
};