import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Plantilla } from '../Modelos/Plantilla'
import { Asignatura } from '../Modelos/Asignaturas'
import {tareaContext} from '../Context/TareasContext'
export default function TareasProvider({children}:Plantilla) {

    const [listaTareas, setListaTareas]=useState<Asignatura[]>([]);

   function agregarListaTarea(tareaObjeto:Asignatura){
        setListaTareas([...listaTareas,tareaObjeto])
   }


  return (
    <tareaContext.Provider  value={{listaTareas,agregarListaTarea}}>
        {children}
    </tareaContext.Provider>
  )
}

export function contexTarea(){
    return useContext(tareaContext)
}