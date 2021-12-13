import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import { STUDENTI } from '../model/TestPodaci';

import { Foundation } from '@expo/vector-icons'

const PopisEkran = (props) => {
    const prikazElelementa = (podaci) => {
        return (
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Detalji', { id: podaci.item.id })}>

                <Text style={styles.text}>{podaci.item.ime}</Text>
                <Foundation name='zoom-in' size={20} style={{position: 'absolute', right: 5, color: 'white'}} />
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.ekran}>
            <View style={styles.buttonContainer} >
                <FlatList data={STUDENTI} keyExtractor={(item) => item.id} renderItem={prikazElelementa} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ekran: {
        flex: 1,
        padding: 10,
        backgroundColor: '#8F4A64',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    popisElement: {
        padding: 20,
        marginHorizontal: 10,
        marginVertical: 15
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',
    },
    button: {
        width: 250,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#AA4C79',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 20

    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        position: 'absolute',
        left: 5,
    },
});
export default PopisEkran