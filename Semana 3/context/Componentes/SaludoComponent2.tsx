import { View, Text } from 'react-native'
import React from 'react'

export default function SaludoComponent2(props:any) {
  return (
    <View>
      <Text>
              Hola Bienvenido Persona: {props.nombre}
      </Text>
      <Text>
              Hola Bienvenido Persona: {props.apellido}
      </Text>
    </View>
  )
}