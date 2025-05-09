import React from "react";
import { Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen options={{
                headerShown: false,
                tabBarIcon:({color, size}) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
            }} name="home"></Tabs.Screen>
            <Tabs.Screen options={{
                headerShown: false,
                tabBarIcon:({color, size}) => (
                  <Ionicons name="person" size={size} color={color} />
                ),
            }}  name="profile"></Tabs.Screen>
            <Tabs.Screen options={{
                headerShown: false,
                tabBarIcon:({color, size}) => (
                  <Ionicons name="add" size={size} color={color} />
                ),
            }}  name="add"></Tabs.Screen>
        </Tabs>
    )
}

export default TabsLayout;
