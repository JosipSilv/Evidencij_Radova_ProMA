import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const RadioButton = ({ data, setVrstaUnesenogRada }) => {
    const [VrstaIzbor, setVrstaIzbor] = useState('');

    // const Odabir = (it) => {
    //     setVrstaIzbor(it.vrsta);
    //     //it.check = !it.check;
    // }
    const Odabir = (it) => {
        setVrstaIzbor(it.vrsta);
        setVrstaUnesenogRada(it.slovo);
        //it.check = !it.check;
    }

    return (
        <View>
            {data.map((item, idx) => {
                return (
                    <Pressable onPress={() => Odabir(item)} key={idx} style={styles.radio}>
                        {VrstaIzbor == item.vrsta ? <MaterialIcons name='radio-button-checked' size={15} color={'white'} /> : <MaterialIcons name='radio-button-unchecked' size={15} color={'white'} />}
                        <Text style={styles.text}>{item.vrsta}</Text>
                    </Pressable>)
            })}
        </View>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
    radio: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
})
