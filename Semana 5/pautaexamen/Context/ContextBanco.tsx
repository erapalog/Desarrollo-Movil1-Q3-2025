import { createContext } from "react";
import { Depositos } from "../Modelos/Depositos";

export const contextBanco=createContext({
    saldoInicial:0,
    aumentarSaldo:(monto:number)=>{},
    retirarSaldo:(monto:number)=>{},
    listaDepositos: [] as Depositos[]
})