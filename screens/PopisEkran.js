import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import { STUDENTI } from '../model/TestPodaci';

const PopisEkran = (props) => {
    const prikazElelementa = (podaci) => {
        return (
            <TouchableOpacity onPress={props.navigation.navigate('Detalji ekran', {
                id: podaci.item.id
            })}>
                <View style={styles.popisElement}>
                    <Text>{podaci.item.ime}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={stil.ekran}>
            <Text>Ekran sa popisom studenata</Text>
            <FlatList data={STUDENTI} keyExtractor={(item) => item.id} renderItem={prikazElelementa} />
        </View>
    );
};

const styles = StyleSheet.create({
    ekran: {
        flex: 1,
        padding: 10,
        backgroundColor: '#99BCD7',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    popisElement: {
        padding: 20,
        marginHorizontal: 10,
        marginVertical: 15,
        borderColor: "black",
        borderWidth: 1,
    }
});
export default PopisEkran