import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Camara from '../pages/Camara';
import Mapa from '../pages/Mapa';
import Ubicacion from '../pages/Ubicacion';
import Acelerometro from '../pages/Acelerometro';

export default function Navegacion() {

  const tab= createBottomTabNavigator();

  return (

    <NavigationContainer>
        <tab.Navigator>
            <tab.Screen name='Camara' component={Camara}></tab.Screen>
            <tab.Screen name='Mapa' component={Mapa}></tab.Screen>
            <tab.Screen name='Ubicacion' component={Ubicacion}></tab.Screen>
            <tab.Screen name='Acelerometro' component={Acelerometro}></tab.Screen>
        </tab.Navigator>
    </NavigationContainer>
   

  )
}