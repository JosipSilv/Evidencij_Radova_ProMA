import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const PocetniEkran = (props) => {
    return (
        <View style={styles.ekran}>
            <Text>Početni ekran aplikacije</Text>
            <Button title="Popis radova" onPress={() => props.navigation.navigate("Popis ekran")} />
            <Button title='Unos' onPress={()=> props.navigation.navigate('Unos ekran')} />
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

export default PocetniEkran