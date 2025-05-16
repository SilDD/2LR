import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const Profile = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [age, setAge] = useState<number>(28); // Alter als separater State
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Namen und Alter laden
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [name, savedAge] = await Promise.all([
          AsyncStorage.getItem('userName'),
          AsyncStorage.getItem('userAge')
        ]);
        setUserName(name);
        if (savedAge) setAge(parseInt(savedAge));
      } catch (error) {
        console.error('Lade-Fehler:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9ACD32" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profilbild mit Upload-Möglichkeit */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/300' }}
          style={styles.profileImage}
        />
        <Pressable
          onPress={() => router.push('/image-upload')}
          style={styles.imageEditButton}
        >
          <Text style={styles.imageEditText}>📷</Text>
        </Pressable>
      </View>

      {/* Dynamische Nutzerdaten */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>
          {userName || "Unbekannter Benutzer"}, {age}
        </Text>
        <Pressable
          onPress={() => router.push('/(modals)/edit-profile')}
          style={styles.editButton}
        >
          <Text style={styles.editText}>Bearbeiten</Text>
        </Pressable>
      </View>

      {/* Beschreibung */}
      <Text style={styles.description}>
        Ich liebe gutes Essen, Natur und spontane Roadtrips. 🌿🚗
      </Text>

      {/* Interaktive Chips */}
      <View style={styles.chipContainer}>
        {['📚 Lesen', '🎵 Musik', '🌍 Reisen', '🐶 Tiere', '💬 Deep Talks'].map((chip) => (
          <Pressable
            key={chip}
            style={({ pressed }) => [
              styles.chip,
              pressed && styles.chipPressed
            ]}
          >
            <Text style={styles.chipText}>{chip}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#9ACD32',
  },
  imageEditButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 6,
  },
  imageEditText: {
    fontSize: 18,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
  },
  editButton: {
    backgroundColor: '#e0f7d9',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  editText: {
    color: '#2e7d32',
    fontSize: 14,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
    maxWidth: '80%',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  chip: {
    backgroundColor: '#e0f7d9',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  chipPressed: {
    transform: [{ scale: 0.95 }],
    opacity: 0.8,
  },
  chipText: {
    color: '#2e7d32',
    fontSize: 14,
  },
});

export default Profile;