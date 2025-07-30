import { View, Text } from 'react-native'
import React from 'react'

type operaciones = 'multiplicar' | 'Sumar' | 'Restar';

interface Parametros{
    a:number
    b:number
    tipoOperacion:operaciones
}

export default function OperacionesAritmeticas(props:Parametros) {


    function fnOperacionesAritmeticas(a: number, b: number, op: operaciones): number {

        let resultado = 0;

        if (op == 'multiplicar')
            resultado = a * b
        else if (op == 'Sumar')
            resultado = a + b
        else
            resultado = a - b


        return resultado
    }

    return (
        <View>
            <Text>Resultados Operaciones</Text>
            <Text>Resultado de la operacion : {fnOperacionesAritmeticas(props.a, props.b, props.tipoOperacion)}</Text>
        </View>
    )
}