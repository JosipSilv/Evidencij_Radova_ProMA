import 'react-native-gesture-handler';

import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//STACK navi
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
//TAB navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
//DRAWER navi
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import DetaljiEkran from './screens/DetaljiEkran';
import PocetniEkran from './screens/PocetniEkran';
import PopisEkran from './screens/PopisEkran';
import UnosEkran from './screens/UnosEkran';
import FilteriEkran from './screens/FilteriEkran';

import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

//REDUCER
import { createStore, combineReducers } from 'redux';
import radReducer from './store/reducers/radovi';

//spajanje svih reducer metoda u jedan objekt
const glavniReducer = combineReducers({ radovi: radReducer });

//centralni spremnik
const store = createStore(glavniReducer);

//Provider
import { Provider } from 'react-redux';
import FavPopisEkran from './screens/FavPopisEkran';


export default function App() {

  //TAB ekrani unutar STACK
  const tabEkrani = () => {
    return (
      <Tab.Navigator screenOptions={
        {
          headerStyle: {
            backgroundColor: '#C56A8C'
          },
          tabBarActiveBackgroundColor: '#AA4C79',
          tabBarInactiveBackgroundColor: '#8F4A64',
          headerShown: false
        }}>
        <Tab.Screen name='Popis svih' component={PopisEkran} options={{

          tabBarIcon: ({ color }) => { return <Ionicons name='list' size={25} color={color} /> },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black'

        }} />

        <Tab.Screen name='Popis favorit radova' component={FavPopisEkran} options={({ route, navigation }) => {
          return {
            headerRight: () => { return <TouchableOpacity onPress={() => navigation.navigate('Unos')}><AntDesign name='addfile' size={30} title='Novi' style={{ marginRight: 20 }} /></TouchableOpacity> },
            tabBarIcon: ({ color }) => { return <Ionicons name='star' size={25} color={color} /> },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'black'
          }
        }} />
      </Tab.Navigator>
    )
  }

  //STACK ekrani
  const StackEkrani = () => {
    return (
      <Stack.Navigator screenOptions={
        {
          headerStyle: {
            backgroundColor: '#C56A8C'
          }
        }
      }>
        <Stack.Screen name='Pocetni ekran' component={PocetniEkran} options={{ title: 'Evidencija radova' }} />

        <Stack.Screen name='Detalji' component={DetaljiEkran} options={({ route, navigation }) => {
          return {
            headerRight: () => { return <TouchableOpacity onPress={() => navigation.navigate('Pocetni ekran')}><Ionicons name='home' size={30} /></TouchableOpacity> }
          }
        }} />

        <Stack.Screen name='Popis radova' options={({ route, navigation }) => {
          return {
            headerRight: () => { return <TouchableOpacity onPress={() => navigation.navigate('Unos')}><AntDesign name='addfile' size={30} title='Novi' /></TouchableOpacity> },
          }
        }}>{() => tabEkrani()}</Stack.Screen>

        <Stack.Screen name='Unos' component={UnosEkran} options={{ title: 'Unos' }} />
      </Stack.Navigator>
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home'>{() => StackEkrani()}</Drawer.Screen>

          <Drawer.Screen name='Filter' component={FilteriEkran} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
