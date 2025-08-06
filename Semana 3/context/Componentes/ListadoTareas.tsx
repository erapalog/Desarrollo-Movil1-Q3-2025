import { View, Text } from 'react-native'
import React from 'react'
import { contexTarea } from '../Provider/TareasProvider'
import { saludoContext } from '../Context/SaludoContext';
import { useContextSaludo } from '../Provider/SaludoProvider';

export default function ListadoTareas() {

  const {listaTareas} = contexTarea();
  const {nombre} =useContextSaludo()
  return (
    <View>
      
      <Text>Nombre del Alumno es: {nombre}</Text>
      {
        listaTareas.map((item)=>(
            <Text key={item.id}> Nombre Tarea: {item.nombreAsignatura}  / {item.cantidadHoras}</Text>
        ))
      }
    </View>
  )
}