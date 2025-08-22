import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useContextBanco } from '../Provider/BancoProvider'

export default function Historial() {

    const {listaDepositos}=useContextBanco()
  return (
    <View>
      <Text>Historial</Text>

      <FlatList
        data={listaDepositos}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item})=>(
            <View>
                <Text>Motivo {item.motivo}</Text>
                 <Text>Monto {item.monto}</Text>
            </View>

        )}
      >

      </FlatList>
    </View>
  )
}