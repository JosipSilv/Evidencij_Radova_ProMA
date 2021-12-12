import React, { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const RadioButton = ({ data, onSelect }) => {
    const [VrstaIzbor, setVrstaIzbor] = useState('');

    const Odabir = (it) => {
        setVrstaIzbor(it.vrsta);
        it.check = !it.check;
    }

    return (
        <View>
            {data.map((item) => {
                return (
                    <Pressable onPress={() => Odabir(item)} style={styles.radio}>
                        {VrstaIzbor == item.vrsta ? <MaterialIcons name='radio-button-checked' size={20} /> : <MaterialIcons name='radio-button-unchecked' size={20} />}
                        <Text>{item.vrsta}</Text>
                    </Pressable>)
            })}
        </View>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    radio: {
        borderColor: 'black',
        borderWidth: 2
    }
})
