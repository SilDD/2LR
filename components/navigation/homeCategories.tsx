import React from 'react';
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Card, Text, XStack, YStack, Image } from 'tamagui';

const categoryImages: Record<string, string> = {
  bars: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  cafes: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
  clubs: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  events: 'https://images.unsplash.com/photo-1515165562835-c2b3d6ef2d4a?auto=format&fit=crop&w=600&q=80',
  live: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  people: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
};

export const HomeCategories: React.FC = () => {
  const categories = [
    { id: 'bars', name: 'Bars', icon: '🍻' },
    { id: 'cafes', name: 'Cafés', icon: '☕' },
    { id: 'clubs', name: 'Clubs', icon: '🎧' },
    { id: 'events', name: 'Events', icon: '🎪' },
    { id: 'live', name: 'Live', icon: '🎤' },
    { id: 'people', name: 'People', icon: '👥' },
  ];

  const router = useRouter();

  const handlePress = (categoryId: string) => {
    router.navigate(`/(tabs)/home/swipe?tab=${categoryId}&favorites=false`);
  };

  // Paare von Kategorien für 2-Spalten-Layout
  const pairs: typeof categories[][] = [];
  for (let i = 0; i < categories.length; i += 2) {
    pairs.push(categories.slice(i, i + 2));
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      contentContainerStyle={{ padding: 16 }}
      showsVerticalScrollIndicator={false}
    >
      <Text fontSize="$7" fontWeight="bold" mb="$5" color="#fff">
        Worauf hast du Lust ?
      </Text>

      <YStack space="$5">
        {pairs.map((pair, index) => (
          <XStack key={index} gap="$4" gapHorizontal="$4">
            {pair.map((category) => (
              <Card
                key={category.id}
                elevate
                bordered
                size="$5"
                animation="quick"
                pressStyle={{ scale: 0.97 }}
                onPress={() => handlePress(category.id)}
                flex={1}
                overflow="hidden"
                borderRadius={15}
              >
                <Image
                  source={{ uri: categoryImages[category.id] }}
                  alt={category.name}
                  width="100%"
                  height={100}
                  resizeMode="cover"
                />

                <YStack p="$3" alignItems="center" justifyContent="center" backgroundColor="#000000cc">
                  <Text fontSize="$6" fontWeight="700" mt="$2" color="#fff">
                    {category.icon} {category.name}
                  </Text>
                </YStack>
              </Card>
            ))}
            {pair.length === 1 && <YStack flex={1} />} {/* Leere Spalte falls ungerade */}
          </XStack>
        ))}
      </YStack>
    </ScrollView>
  );
};
