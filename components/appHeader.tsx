import React, { useState } from 'react'
import {
  YStack,
  XStack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
} from 'tamagui'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function AppHeader() {
  const [open, setOpen] = useState(false)

  return (
    <YStack
      padding="$4"
      elevation="$4"
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
      width="100%"
    >
      <XStack justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Text fontWeight="bold" fontSize={25}>
          Second LR
        </Text>

        {/* Burger Menu mit Dropdown */}
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              icon={<MaterialIcons name="menu" size={18} color="black" />}
              size="$5"
            >

            </Button>
          </PopoverTrigger>
          <PopoverContent
            width={180}

            elevation="$5"
          >
            <YStack space="$2">
              <Button onPress={() => alert('Start gedrückt')} style={{backgroundColor: 'transparent', color: '#ffffff', border: 'none'}}>
                Start
              </Button>
              <Button onPress={() => alert('Über uns gedrückt')} style={{backgroundColor: 'transparent', color: '#ffffff', border: 'none'}}>
                Über uns
              </Button>
              <Button onPress={() => alert('Kontakt gedrückt')} style={{backgroundColor: 'transparent', color: '#ffffff', border: 'none'}}>
                Kontakt
              </Button>
            </YStack>
          </PopoverContent>
        </Popover>
      </XStack>
    </YStack>
  )
}
