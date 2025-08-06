import { View, Text } from 'react-native'
import React from 'react'

export default function SaludosComponent(props:any) {
  return (
    <View>
      <Text>
        Hola Bienvenido Persona: {props.nombre}
      </Text>
    </View>
  )
}