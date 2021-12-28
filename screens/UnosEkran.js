import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'

import RadioButton from '../components/RadioButton'
import { data } from '../components/VrstaRadaData'

const UnosEkran = (props) => {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.ekran}>
                <View style={styles.detalji_container}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.text}>Student/ica:</Text>
                        <TextInput style={styles.inputField} />

                        <Text style={styles.text}>Naslov:</Text>
                        <TextInput style={styles.inputField} />
                    </View>

                    <View style={styles.radioContainer}>
                        <RadioButton data={data} />
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Dodaj</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    ekran: {
        flex: 1,
        padding: 10,
        backgroundColor: '#8F4A64',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    radioContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    inputField: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginTop: 15,
        marginBottom: 15,
        color: 'white'
    },
    detalji_container: {
        backgroundColor: '#AA4C79',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 400,
        marginTop: 20
    },
    space: {
        marginTop: 25,
        color: 'white'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#AA4C79',
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 1
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default UnosEkran
