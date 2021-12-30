import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'

import RadioButton from '../components/RadioButton'
import { data } from '../components/VrstaRadaData'

import { useSelector, useDispatch } from 'react-redux';
import { unesiRad } from '../store/actions/radovi';

import {Student} from '../model/Student'
const Konstruktor = () => {
    return new Student(100, 'ANTE', 'action.naslovRada', 'action.vrstaRada')
}


const UnosEkran = (props) => {
    const dispatch = useDispatch();

    const [ImeStudenta, setImeStudenta] = useState('');
    const [NaslovRada, setNaslovRada] = useState('');
    const [VrstaUnesenogRada, setVrstaUnesenogRada] = useState('');

    const promjenaUnosa = (ime) => {
        setImeStudenta(ime.replace(/[^a-zA-Z]/g, ''));
    }

    const promjenaUnosaNaslova = (nas) => {
        setNaslovRada(nas.replace(/[^a-zA-Z]/g,''));
    }
    
    const unesiNovogStudenta = () => {
        //console.log(new Student(100, 'ANTE', 'action.naslovRada', 'action.vrstaRada'))
        //dispatch(unesiRad(ImeStudenta, NaslovRada, VrstaUnesenogRada));
        console.log(Konstruktor());
    }
    
    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.ekran}>
                <View style={styles.detalji_container}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.text}>Student/ica:</Text>
                        <TextInput style={styles.inputField} placeholder='Unesi ime...' value={ImeStudenta} onChangeText={promjenaUnosa} />

                        <Text style={styles.text}>Naslov:</Text>
                        <TextInput style={styles.inputField} placeholder='Unesi naslov rada...' value={NaslovRada} onChangeText={promjenaUnosaNaslova} />
                    </View>

                    <View style={styles.radioContainer}>
                        <RadioButton data={data} setVrstaUnesenogRada={setVrstaUnesenogRada} />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={unesiNovogStudenta}>
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
