import {StyleSheet,Text,View} from "react-native";
import React from "react";
import {Link} from "expo-router";

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>2RLife</Text>
            <Link style={styles.link} href="/(tabs)/home">öffnen</Link>
        </View>
    )
}


export default Index;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headline: {
        color: 'white',
        fontSize: 24,
    },
    link: {
        marginTop: 20,
        color: 'white',
        fontSize: 24,
        backgroundColor: 'blue',
        padding: 10,
    }
})