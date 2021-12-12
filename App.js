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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Pocetni ekran' component={PocetniEkran} />
        <Stack.Screen name='Detalji ekran' component={DetaljiEkran} options={(pr) => {
          return {
            headerRight: () => { return <Button title='Home' onPress={() => pr.navigation.navigate('Pocetni ekran')} /> }
          }
        }} />
        <Stack.Screen name='Popis ekran' component={PopisEkran} options={(pr) => {
          return {
            headerRight: () => { return <Button title='Novi' onPress={() => pr.navigation.navigate('Unos ekran')} /> }
          }
        }} />
        <Stack.Screen name='Unos ekran' component={UnosEkran} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
