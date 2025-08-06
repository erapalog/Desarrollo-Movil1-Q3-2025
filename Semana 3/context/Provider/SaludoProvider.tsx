import { View, Text } from 'react-native'
import React, { Children, ReactNode, useContext, useState } from 'react'
import {saludoContext} from '../Context/SaludoContext'
import { Plantilla } from '../Modelos/Plantilla';


//1. Recibir un componente React Node
//2. Agrear implementaciones
//3. Exponer el contexto


export default function SaludoProvider(props: Plantilla) {

   const [nombre,setNombre]=useState<string>("Erick");

   function modificarNombre(nombre:string){
      setNombre(nombre)
   }
   
  return (
    <saludoContext.Provider  value={{nombre,modificarNombre}}>
        {props.children}
    </saludoContext.Provider>
  )
}

export function useContextSaludo(){
    return useContext(saludoContext);
}