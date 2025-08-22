import { View, Text, Button } from 'react-native'
import React from 'react'
import { useContextBanco } from '../Provider/BancoProvider'

export default function Inicio() {

    const {saldoInicial,aumentarSaldo}=useContextBanco()
  return (
    <View>
      <Text>Bienvienido a la Aplicacion Bancaria</Text>
      <Text>Su Saldo Inicial Es: {saldoInicial}</Text>
      <Button title='Depositar Dinero' onPress={()=>aumentarSaldo(500)}></Button>
    </View>
  )
}