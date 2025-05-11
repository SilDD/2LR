import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native'
import React, {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favourite = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        if (name && phone && email) {
            try {
                const contact = {name, phone, email};
                const existingContactsString = await AsyncStorage.getItem('contacts');
                let contacts = []
                if (existingContactsString) {
                    try {
                        const parsed = JSON.parse(existingContactsString);
                        if (Array.isArray(parsed)) {
                            contacts = parsed;
                        } else {
                            // Falls fälschlich ein einzelnes Objekt gespeichert wurde
                            contacts = [parsed];
                        }
                    } catch (e) {
                        console.error('Fehler beim Parsen:', e);
                    }
                }
                contacts.push(contact);


                console.log("liste", contacts);
                await AsyncStorage.setItem('contacts', JSON.stringify(contacts));

                Alert.alert('Kontakt gespeichert',
                    'Name: ' + name + '\nTelefon: ' + phone + '\nE-Mail ' + email
                );
                setName('');
                setPhone('');
                setEmail('');


            } catch (error) {
                Alert.alert('Fehler', error.message);
            }
        } else {
            Alert.alert('Fehler', 'Bitte füllen Sie allle Felder aus.');
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Neuen Kontakt hinzufügen</Text>
            <Text>Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName}></TextInput>

            <Text>Telefonnummer:</Text>
            <TextInput style={styles.input} value={phone} onChangeText={setPhone}></TextInput>

            <Text>E-Mail:</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail}></TextInput>

            <Button title="Kontakt speichern" onPress={handleSubmit}></Button>
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