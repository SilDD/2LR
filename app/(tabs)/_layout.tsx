import { Tabs } from "expo-router";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Typen für bessere TypeScript-Sicherheit
type TabName = "game" | "communication" | "home" | "favourite" | "profile";
type IconMap = Record<TabName, keyof typeof Ionicons.glyphMap>;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8e8e93",
      }}
    >
      <Tabs.Screen
        name="game"
        options={{
          title: "Game",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="communication"
        options={{
          title: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#111",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerTabButton: {
    backgroundColor: "#222",
    borderRadius: 999,
    padding: 10,
    marginTop: -30,
  },
});
