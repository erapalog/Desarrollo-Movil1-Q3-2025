import { View, Text } from 'react-native'
import React from 'react'
import { Estudiante } from '../Modelos/Estudiantes'
import { ListaEstudianteProps } from '../Modelos/ListaEstudianteProps'



export default function ListaAlumnos(prop:ListaEstudianteProps) {
  return (
    <View>
      
       {
        prop.listaEstudiante.map((item,index)=>(
            <Text key={index}> Numero - {index} Nombre Estudiante: {item.nombre}</Text>
        )) 
      }
    </View>
  )
}