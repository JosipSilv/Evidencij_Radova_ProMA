import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { STUDENTI } from '../model/TestPodaci'

const DetaljiEkran = (props) => {
    const [StudentId, setStudentId] = useState(props.route.params.id);
    const [StudentObj, setStudentObj] = useState({});

    useEffect(() => {
        STUDENTI.map((it) => {
            if (it.id === StudentId) {
                setStudentObj(it);
            }
        })
    }, [StudentId])

    return (
        <View style={styles.ekran}>
            <View style={styles.detalji_container}>
                <Text style={{color: 'white'}}>Ime: {StudentObj.ime}</Text>
                <Text style={styles.space}>Naslov: {StudentObj.naslov}</Text>
                <Text style={styles.space}>Vrsta: {StudentObj.vrsta}</Text>
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
        justifyContent: 'space-between',
        flexDirection: 'column',
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
    }
});


export default DetaljiEkran
