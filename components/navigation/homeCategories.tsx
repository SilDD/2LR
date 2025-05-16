import React from 'react';
import {Link, router, useRouter} from 'expo-router';
import {Card, Text, XStack, YStack} from 'tamagui';

export const HomeCategories: React.FC = () => {
    const categories = [
        {id: 'bars', name: 'Bars', icon: '🍻'},
        {id: 'cafes', name: 'Cafés', icon: '☕'},
        {id: 'clubs', name: 'Clubs', icon: '🎧'},
        {id: 'events', name: 'Events', icon: '🎪'},
        {id: 'live', name: 'Live', icon: '🎤'},
        {id: 'people', name: 'People', icon: '👥'}
    ];

    const router = useRouter()

    const handlePress = (categoryId: string) => {
        router.navigate(`/(tabs)/home/swipe?tab=${categoryId}&favorites=false`)
    }


    return (
        <YStack space="$4" p="$4">
            <Text fontSize="$6" fontWeight="bold">Worauf hast du Lust ?</Text>

            {categories.map((category) => (
                <Card
                    key={category.id}
                    elevate
                    bordered
                    size="$4"
                    animation="quick"
                    pressStyle={{scale: 0.97}}
                    onPress={() => handlePress(category.id)}
                >
                    <Card.Header>
                        <XStack space="$2" alignItems="center">
                            <Text fontSize="$7">{category.icon}</Text>
                            <Text fontSize="$5" fontWeight="600">{category.name}</Text>
                        </XStack>
                    </Card.Header>
                </Card>
            ))}
        </YStack>
    )

}

