import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profilbild */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={styles.profileImage}
      />

      {/* Name & Alter */}
      <Text style={styles.name}>Anna Müller, 28</Text>

      {/* Beschreibung */}
      <Text style={styles.description}>
        Ich liebe gutes Essen, Natur und spontane Roadtrips. Offen für neue Abenteuer und tiefgründige Gespräche 🌿🚗
      </Text>

      {/* Chips */}
      <View style={styles.chipContainer}>
        <Text style={styles.chip}>📚 Lesen</Text>
        <Text style={styles.chip}>🎵 Musik</Text>
        <Text style={styles.chip}>🌍 Reisen</Text>
        <Text style={styles.chip}>🐶 Tiere</Text>
        <Text style={styles.chip}>💬 Deep Talks</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: '#9ACD32',
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  chip: {
    backgroundColor: '#e0f7d9',
    color: '#2e7d32',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    margin: 4,
    fontSize: 14,
  },
});
