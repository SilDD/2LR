
import React from "react";
import {Stack} from "expo-router";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen options={{headerShown:false}} name="index"></Stack.Screen>
            <Stack.Screen options={{headerShown:false}} name="(tabs)"></Stack.Screen>
        </Stack>
    )
}

export default RootLayout;


