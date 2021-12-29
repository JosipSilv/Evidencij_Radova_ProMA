import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const FilteriEkran = () => {
    return (
        <View style={styles.ekran}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Svi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Diplomski</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Zavrsni</Text>
            </TouchableOpacity>
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
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
})


export default FilteriEkran
