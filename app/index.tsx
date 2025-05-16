import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NameInputScreen() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSaveName = async () => {
    if (!name.trim()) return;

    setIsLoading(true);
    try {
      await AsyncStorage.setItem('userName', name); // Async speichern
      router.push('/(tabs)/home'); // Weiterleiten
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#1a0025' }}>
      <Text style={{ fontSize: 24, color: '#d100f9', marginBottom: 10 }}>Willkommen!</Text>
      <Text style={{ color: '#ccc', marginBottom: 30 }}>Wie sollen wir dich nennen?</Text>

      <TextInput
        placeholder="Dein Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
        style={{
          backgroundColor: '#2a0038',
          color: 'white',
          padding: 15,
          borderRadius: 8,
          marginBottom: 20,
        }}
      />

      <Pressable
        onPress={handleSaveName}
        disabled={isLoading}
        style={{
          backgroundColor: '#d100f9',
          padding: 15,
          borderRadius: 8,
          alignItems: 'center',
          opacity: isLoading ? 0.6 : 1,
        }}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Bestätigen</Text>
        )}
      </Pressable>
    </View>
  );
}