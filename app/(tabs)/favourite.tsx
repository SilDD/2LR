import { StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favourite = () => {

    return (
        <View>
            <Text>Favouriten</Text>
        </View>
    )
}

export default Favourite

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'green'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10
    }
})