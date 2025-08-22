import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useJuegoContext } from '../Provider/JuegosProvider'

export default function ListaJugadas() {

    const { cantidaPartidas } = useJuegoContext()
    return (
        <FlatList data={cantidaPartidas}
            keyExtractor={(_, i) => i.toString()}
           
            renderItem={({ item }) => (
                <View >
                    <Text>Id: {item.id} - {item.descripcion}</Text>
                </View>


            )}
        >

        </FlatList>

    )
}