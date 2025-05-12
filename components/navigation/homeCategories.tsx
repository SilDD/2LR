import React from 'react';
import {Link, router} from 'expo-router';
import {Card, Text, XStack} from 'tamagui';

export const HomeCategories: React.FC = () => {
    const categories = [
        {id: 'bars', name: 'Bars', icon: '🍻'},
        {id: 'cafes', name: 'Cafés', icon: '☕'},
        {id: 'clubs', name: 'Clubs', icon: '🎧'},
        {id: 'events', name: 'Events', icon: '🎪'},
        {id: 'live', name: 'Live', icon: '🎤'},
        {id: 'people', name: 'People', icon: '👥'}
    ];

    return (
        <XStack flexWrap="wrap" justifyContent="space-between" space="$3">
            {categories.map((category) => (

                    <Card
                        key={category.id}
                        elevate
                        size="$4"
                        bordered
                        animation="bouncy"
                        hoverStyle={{scale: 0.975}}
                        pressStyle={{scale: 0.95}}
                         onPress={() => router.navigate(`/(tabs)/home/swipe?tab=${category.id}`)}
                    >
                        <Card.Header padded>
                            <Text fontSize="$8" textAlign="center">
                                {category.icon}
                            </Text>
                            <Text fontSize="$5" textAlign="center" marginTop="$2">
                                {category.name}
                            </Text>
                        </Card.Header>
                    </Card>


            ))
            }
        </XStack>
    )

}

