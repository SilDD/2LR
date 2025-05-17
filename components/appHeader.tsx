import React, {useState} from 'react'
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
import {useRouter} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AppHeader() {
    const [open, setOpen] = useState(false)
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const handleClearName = async () => {


        setIsLoading(true);
        try {
            await AsyncStorage.setItem('userName', "");
        } catch (error) {
            console.error('Fehler beim Abmelden:', error);
        } finally {
            setIsLoading(false);
        }
    };


    const handleUserBye = () => {
        handleClearName().then(r =>
            router.navigate('/'));
        setOpen(false);
    }

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
                            style={{backgroundColor: 'transparent', borderWidth: 0}}
                            icon={<MaterialIcons name="menu" size={30} color="#ffffff"/>}
                            size="$5"
                            accessibilityLabel="Menü"
                        />

                    </PopoverTrigger>
                    <PopoverContent
                        width={180}

                        elevation="$5"
                    >
                        <YStack space="$2">
                            <Button onPress={() => alert('Über uns gedrückt')}
                                    style={{backgroundColor: 'transparent', color: '#ffffff', border: 'none'}}>
                                Über uns
                            </Button>
                            <Button onPress={() => alert('Kontakt gedrückt')}
                                    style={{backgroundColor: 'transparent', color: '#ffffff', border: 'none'}}>
                                Kontakt
                            </Button>
                            <Button onPress={() => handleUserBye()}
                                    style={{backgroundColor: 'transparent', color: '#ffffff', border: 'none'}}>
                                Abmelden
                            </Button>
                        </YStack>
                    </PopoverContent>
                </Popover>
            </XStack>
        </YStack>
    )
}
