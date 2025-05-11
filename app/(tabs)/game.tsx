import {StyleSheet,Text,View} from "react-native";
import React from "react";


const Game = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>Kneipenswipen</Text>
        </View>
    )
}

export default Game;

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
