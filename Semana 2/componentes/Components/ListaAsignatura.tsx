import { View, Text } from 'react-native'
import React from 'react'
import { Asignatura } from '../Modelos/Asignatura';

export default function ListaAsignatura() {

    let listaAsignatura:Asignatura[]=[
    { nombreAsignatura: 'Desarro Web', numeroHoras:3},
    {nombreAsignatura:'Base de datos', numeroHoras:5},
    {nombreAsignatura:'IA', numeroHoras:8}
  ];


  return (
    <View>
      <Text>Listados de asignatura</Text>
       {
        listaAsignatura.map((x)=>(
          <Text>Nombre Asignatura {x.nombreAsignatura} - Horas: {x.numeroHoras}</Text>
        ))
      }
    </View>
  )
}