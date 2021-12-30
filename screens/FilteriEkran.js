import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

import { Foundation } from '@expo/vector-icons'


import { useSelector, useDispatch } from 'react-redux';
import { filtrirajNiz } from '../store/actions/radovi';


const FilteriEkran = (props) => {
    const dispatch = useDispatch();
    const filtriraniRadovi = useSelector((state) => state.radovi.filterRadovi);

    const prikazElementa = (podaci) => {
        return (
            <TouchableOpacity style={ styles.buttonWidth} onPress={() => props.navigation.navigate('Detalji', { id: podaci.item.id })}>

                <Text style={styles.text}>{podaci.item.ime}</Text>
                <Foundation name='zoom-in' size={20} style={{ position: 'absolute', right: 5, color: 'white' }} />
            </TouchableOpacity>
        );
    };

    const dohvatiFilter = (v) => {
        dispatch(filtrirajNiz(v));
    }


    return (
        <View style={styles.ekran}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => dohvatiFilter('S')}>
                    <Text style={styles.text}>Svi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => dohvatiFilter('D')}>
                    <Text style={styles.text}>Diplomski</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => dohvatiFilter('Z')}>
                    <Text style={styles.text}>Zavrsni</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer} >
                <FlatList data={filtriraniRadovi} keyExtractor={(item) => item.id} renderItem={prikazElementa} />
            </View>
        </View>
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
    buttonWidth:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#AA4C79',
        marginTop: 40,
        borderColor: 'white',
        borderWidth: 1
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})


export default FilteriEkran
