import React, {useState} from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import RadioButton from '../components/RadioButton'
import { data } from '../components/VrstaRadaData'

const UnosEkran = (props) => {

    return (
        <View style={styles.ekran}>
            <Text>Ekran za unos novih podataka</Text>
            <View>
                <Text>Student/ica:</Text>
                <TextInput />

                <Text>Naslov:</Text>
                <TextInput />
            </View>

            <View>
                <RadioButton data = {data} />
            </View>

            <Button title='Dodaj' />
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

export default UnosEkran
