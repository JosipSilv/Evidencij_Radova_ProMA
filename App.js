import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import DetaljiEkran from './screens/DetaljiEkran';
import PocetniEkran from './screens/PocetniEkran';
import PopisEkran from './screens/PopisEkran';
import UnosEkran from './screens/UnosEkran';

import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerStyle: {
            backgroundColor: '#C56A8C'
          }
        }
      }>
        <Stack.Screen name='Pocetni ekran' component={PocetniEkran} options={{ title: 'Evidencija radova' }} />
        <Stack.Screen name='Detalji' component={DetaljiEkran} options={(pr) => {
          return {
            headerRight: () => { return <Ionicons name='home' size={20} onPress={() => pr.navigation.navigate('Pocetni ekran')} /> }
          }
        }} />
        <Stack.Screen name='Popis radova' component={PopisEkran} options={(pr) => {
          return {
            headerRight: () => { return <AntDesign name='addfile' size={20} title='Novi' onPress={() => pr.navigation.navigate('Unos')} /> }
          }
        }} />
        <Stack.Screen name='Unos' component={UnosEkran} options={{ title: 'Unos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
