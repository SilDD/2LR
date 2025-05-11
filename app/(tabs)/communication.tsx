import {StyleSheet,Text,View} from "react-native";
import React from "react";


const Communication = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>Hier entsteht ein Chatbereich</Text>
        </View>
    )
}

export default Communication;

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
    }
})