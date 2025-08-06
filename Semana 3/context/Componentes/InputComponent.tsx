import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useContextSaludo } from '../Provider/SaludoProvider'

export default function InputComponent() {

    const [nombrePersona, setNombrePersona]=useState('')
    const { modificarNombre}= useContextSaludo();




  return (
    <View>
      <TextInput
        placeholder='Agregar Nombre para saludar'
        value={nombrePersona}
        onChangeText={setNombrePersona}
      >

      </TextInput>

      <Button title='Agregar Nombre' onPress={()=>modificarNombre(nombrePersona)}></Button>
    </View>
  )
}