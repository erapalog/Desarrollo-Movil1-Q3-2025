import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Asignatura } from '../Modelos/Asignaturas'
import { contexTarea } from '../Provider/TareasProvider'

export default function TareaComponent() {

   
  const {agregarListaTarea,listaTareas} =contexTarea()
  const [nombreAsignatura, setNombreAsignatura]=useState<string>('')
  const [cantidadHoras, setCantidadHoras]=useState<string>('')

  function agregarTareaIndividual(){

    let tarea: Asignatura={
        id: Date.now(),
        nombreAsignatura:nombreAsignatura,
        cantidadHoras:parseInt(cantidadHoras)
    }
    agregarListaTarea(tarea);

    Alert.alert('Tarea agregada correctamente')
  }


  useEffect(()=>{
        console.log(listaTareas)
  },[listaTareas]);


  return (
    <View>
      
      <TextInput 
         placeholder='Agregar nombre tarea'
         value={nombreAsignatura}
         onChangeText={setNombreAsignatura}         
         >

      </TextInput>

       <TextInput 
         placeholder='Agregar cantidad horas '
         value={cantidadHoras}
         onChangeText={setCantidadHoras}         
         >

      </TextInput>

      <Button title='Agregar Tarea' onPress={agregarTareaIndividual}></Button>
    </View>
  )
}