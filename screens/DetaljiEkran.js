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
            <Text>Ime: {StudentObj.ime}</Text>
            <Text>Naslov: {StudentObj.naslov}</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    ekran: {
        flex: 1,
        padding: 10,
        backgroundColor: '#99BCD7',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});


export default DetaljiEkran
