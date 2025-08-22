import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useContextBanco } from '../Provider/BancoProvider'

export default function Transferencias() {

  const [nombre, setNombre]=useState("")
  const [numeroCuenta, setNumeroCuenta]=useState("")
  const [monto,setMonto]=useState("")


  const {retirarSaldo}=useContextBanco()
  return (
    <View>
      

      <TextInput placeholder='Ingrese su nombre'
            value={nombre}
            onChangeText={setNombre}
      ></TextInput>

        <TextInput placeholder='Ingrese su Cuenta'
            value={numeroCuenta}
            onChangeText={setNumeroCuenta}
      ></TextInput>

        <TextInput placeholder='Ingrese su Monto'
            value={monto}
            onChangeText={setMonto}
      ></TextInput>

      <Button title='Realizar Transferncia' onPress={()=>retirarSaldo(parseFloat(monto))}></Button>


    </View>
  )
}