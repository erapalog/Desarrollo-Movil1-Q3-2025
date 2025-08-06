import { View, Text } from 'react-native'
import React from 'react'
import { useContextSaludo } from '../Provider/SaludoProvider'

export default function ConsumidoComponents() {

  const {nombre} = useContextSaludo()
  return (
    <View>
      <Text>El nombre de la persona es: {nombre} desde Context</Text>
    </View>
  )
}