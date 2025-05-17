import { Button, Card, XStack, Text, YStack } from 'tamagui'
import { useState } from 'react'

export default function GroupItem({ group, isSelected, onToggle }) {
  return (
    <Card
      borderWidth={1}
      borderColor={isSelected ? '#0f0' : '#555'}
      borderRadius={12}
      padding="$3"
      marginBottom={10}
      elevation={2}
      backgroundColor={isSelected ? '#003300' : '#111'}
    >
      <XStack alignItems="center" justifyContent="space-between">
        <Text color={isSelected ? '#0f0' : '#fff'} fontSize={16}>
          {group.name}
        </Text>
        <Button
          size="$3"
          circular
          theme={isSelected ? 'green' : 'gray'}
          onPress={() => onToggle(group.id)}
        >
          {isSelected ? '✓' : '+'}
        </Button>
      </XStack>
    </Card>
  )
}
