import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Plantilla } from '../Modelos/Plantilla'
import { Depositos } from '../Modelos/Depositos';
import {contextBanco} from '../Context/ContextBanco'
export default function BancoProvider({children}:Plantilla) {

  const [saldoInicial,setSaldoInicial]=useState<number>(10000);
  const [listaDepositos, setListaDepositos]=useState<Depositos[]>([]);

  function aumentarSaldo(monto:number){
        setSaldoInicial(saldoInicial+monto);

        let detalleDeposito:Depositos={
            motivo:'Deposito',
            monto:monto
        }

        setListaDepositos([...listaDepositos,detalleDeposito])
  }

  function retirarSaldo(monto:number){

    if(monto>saldoInicial){
        alert("El saldo insuficiente para la transaccion")
    }
    else{
         let detalleDeposito:Depositos={
            motivo:'Retiro',
            monto:monto
        }

        setListaDepositos([...listaDepositos,detalleDeposito]);
        alert("Transferenia valida")

    }

  }

  return (
    <contextBanco.Provider value={{saldoInicial,listaDepositos,aumentarSaldo,retirarSaldo}}>
      {children}
    </contextBanco.Provider>
  )
}

export function useContextBanco(){
    return useContext(contextBanco)
}