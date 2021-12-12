import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { STUDENTI } from '../model/TestPodaci'

const DetaljiEkran = (props) => {
    return (
        <View>
            {STUDENTI.map((it) => {
                if (it.id === props.route.params.id) {
                    <View>
                        <Text>Ime: {it.ime}</Text>
                        <Text>Naslov: {it.naslov}</Text>
                    </View>
                }
            })}
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
