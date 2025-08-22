import { View, Text } from 'react-native'
import React, { ReactNode, useContext, useState } from 'react'
import { Plantilla } from '../Modelos/Plantia'
import {juegoContext} from '../Context/JuegoContext'
import { DatosPartida } from '../Modelos/DatosPartida';

export default function JuegosProvider({children}:Plantilla) {

  const [cartas, setCartas]=useState (['A','B','C','D','A','B','C','D']);
  const [cantidaPartidas, setCantidadPartidas]= useState<DatosPartida[]>([]);

  function sumarPartida(item:DatosPartida){
    setCantidadPartidas([...cantidaPartidas,item])
  }

  return (
    <juegoContext.Provider value={{cartas,cantidaPartidas,sumarPartida}}>
        {children}
    </juegoContext.Provider>
  )
}

export function useJuegoContext(){
    return useContext(juegoContext)
}