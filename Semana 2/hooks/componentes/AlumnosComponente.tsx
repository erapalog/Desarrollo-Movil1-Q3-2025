import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Estudiante } from '../Modelos/Estudiantes'
import ListaAlumnos from './ListaAlumnos';
import FlatListComponent from './FlatListComponent';

export default function AlumnosComponente() {

  const [listaEstudiante, setListaEstudiante]=useState<Estudiante[]>([]);

  useEffect(()=>{
    let estudiante: Estudiante={
        nombre:'Ana Perez',
        carnet:'000001'
    }

    setListaEstudiante(item=>[...item,estudiante]);

    console.log(listaEstudiante)
  },[]);


  useEffect(()=>{
   console.log(listaEstudiante)
  },[listaEstudiante]);


  function agregarUsuario(){
     let estudiante: Estudiante={
        nombre:'Ana Perez',
        carnet:'000001'
    }

     setListaEstudiante(item=>[...item,estudiante]);
 
  }
  return (
    <View>
      <Text>Componente para agregar alumnos</Text>

      <Button title='Agregar usuario' onPress={agregarUsuario}></Button>

        {/*<ListaAlumnos listaEstudiante={listaEstudiante}></ListaAlumnos>*/}

        <FlatListComponent listaEstudiante={listaEstudiante}></FlatListComponent>
    </View>
  )
}