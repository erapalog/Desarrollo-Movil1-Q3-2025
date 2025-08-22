import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import ListaResultados from '../Pages/ListaResultados';

export default function Navegacion() {

 const tab= createBottomTabNavigator();

  return (
    <NavigationContainer>
        <tab.Navigator initialRouteName='ListaResultados'>
            <tab.Screen name='Home' component={Home}></tab.Screen>
            <tab.Screen name='ListaResultados' component={ListaResultados}></tab.Screen>

        </tab.Navigator>
    </NavigationContainer>
  )
}