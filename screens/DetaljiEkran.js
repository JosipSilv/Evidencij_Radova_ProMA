import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { promjenaFavorita } from "../store/actions/radovi";

//REDUX
import { useSelector, useDispatch } from 'react-redux';

const DetaljiEkran = (props) => {
    //const [StudentId, setStudentId] = useState(props.route.params.id);
    // const [StudentObj, setStudentObj] = useState({});

    // useEffect(() => {
    //     STUDENTI.map((it) => {
    //         if (it.id === StudentId) {
    //             setStudentObj(it);
    //         }
    //     })
    // }, [StudentId])

    //jeli rad u favoritima
    const [Favorit, setFavorit] = useState(false);

    const idStudent = Number(props.route.params.id);
    const sviRadovi = useSelector(state => state.radovi.radovi)
    const rad = sviRadovi.find((r) => r.id === idStudent);
    const favRadovi = useSelector(state => state.radovi.favoritRadovi);

    useEffect(() => {
        setFavorit(favRadovi.some(item => item.id === rad.id))
    }, [rad, favRadovi])

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: rad?.ime,
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={() => dispatch(promjenaFavorita(idStudent))}>
                        <View>
                            <MaterialCommunityIcons name={Favorit ? 'star-four-points' : 'star-four-points-outline'} size={30} />
                        </View>
                    </TouchableOpacity>
                );
            },

        });

    }, [rad, dispatch, idStudent, Favorit])

    //TEST DISPATCH
    const dispatch = useDispatch();
    const akcijaFav = () => {
        dispatch(promjenaFavorita(idStudent))
    }


    return (
        <View style={styles.ekran}>
            <View style={styles.detalji_container}>
                <Text style={{ color: 'white' }}>Ime: {rad.ime}</Text>
                <Text style={styles.space}>Naslov: {rad.naslov}</Text>
                <Text style={styles.space}>Vrsta: {rad.vrsta}</Text>

                <TouchableOpacity style={styles.button} onPress={akcijaFav}>
                    <Text style={styles.text}>Dodaj u favorite</Text>
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
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    detalji_container: {
        backgroundColor: '#AA4C79',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 400,
        marginTop: 20
    },
    space: {
        marginTop: 25,
        color: 'white'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
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
});


export default DetaljiEkran
