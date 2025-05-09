import {StyleSheet,Text,View} from "react-native";
import React from "react";


const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>2RLife</Text>
        </View>
    )
}

export default Profile;

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
