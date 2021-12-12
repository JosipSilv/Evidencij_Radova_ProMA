import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UnosEkran = (props) => {
    return (
        <View style={styles.ekran}>
            <Text>Ekran za unos novih podataka</Text>
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
