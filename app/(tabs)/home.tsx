import {Alert, FlatList, StyleSheet, Text, View} from 'react-native'
import React, {useCallback, useEffect, useState} from 'react'
import {useFocusEffect} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const [contacts, setContacts] = useState([]);


    useFocusEffect(
        useCallback(() => {
            AsyncStorage.getItem('contacts')
                .then((existingContactsString) => {
                    if (existingContactsString) {
                        console.log("Geladener String:", existingContactsString);

                        const parsed = JSON.parse(existingContactsString);
                        console.log("Parsed:", parsed); // <- Muss ein Array sein!

                        if (Array.isArray(parsed)) {
                            setContacts(parsed);
                        } else {
                            console.warn("Kein Array aus dem Speicher:", parsed);
                        }
                    }
                });
        }, [])
    );

    useEffect(() => {
        console.log('contacts wurden aktualisiert:', contacts);
    }, [contacts]);


    const renderItem = ({item}) =>
        <View style={styles.contactItem}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.email}</Text>
        </View>
    ;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meine Kontakte</Text>
            <FlatList
                data={Array.isArray(contacts) ? contacts : []}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    contactItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    contactName: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})