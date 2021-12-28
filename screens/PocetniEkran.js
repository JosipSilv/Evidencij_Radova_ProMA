import React from 'react'
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const PocetniEkran = (props) => {
    return (
        <View style={styles.ekran}>
            <Image source={require('../assets/books.jpg')} style={styles.slika} />

            <View>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Popis radova", {screen: 'Popis svih'})}>
                    <Text style={styles.text}>Popis radova</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Unos')}>
                    <Text style={styles.text}>Unos</Text>
                </TouchableOpacity>
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
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
    slika: {
        width: 250,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 20,
        margin: 20
    }

});

export default PocetniEkran