import { createContext } from "react";
import { DatosPartida } from "../Modelos/DatosPartida";


export const juegoContext= createContext({
    cantidaPartidas: [] as DatosPartida[],
    sumarPartida: (partida: DatosPartida)=>{},
    cartas: [] as string[]
})