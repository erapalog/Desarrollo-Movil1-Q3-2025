import { View, Text, Alert, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useJuegoContext } from '../Provider/JuegosProvider'
import ListaJugadas from './ListaJugadas';

export default function Home() {

    const { cartas, cantidaPartidas, sumarPartida } = useJuegoContext();
    let cartasSeleccionas = [] as string[]

    function jugar(cartaSelecciona: string) {


        cartasSeleccionas.push(cartaSelecciona);

        if (cartasSeleccionas.length == 2) {
            if (cartasSeleccionas[0] === cartasSeleccionas[1]) {
                Alert.alert("Gano partida");
                sumarPartida({ id: cartasSeleccionas.length + 1, "descripcion": 'Partida Ganada' })
            }
            {
                Alert.alert("Perdio partida");
                sumarPartida({ id: cartasSeleccionas.length + 1, "descripcion": 'Partida Perdida' })

            }
        }

    }

    useEffect(()=>{
            cartasSeleccionas=[];
    },[])
    return (
        <View>
            <Text>Juegar Partidas de Cartas</Text>

            <FlatList data={cartas}
                keyExtractor={(_, i) => i.toString()}
                numColumns={4}
                contentContainerStyle={style.grid}
                renderItem={({ item }) => (
                    <View style={style.card} >
                        <TouchableOpacity onPress={() => jugar(item)}>
                            <Text>S</Text>
                        </TouchableOpacity>

                    </View>


                )}
            >

            </FlatList>

            
         <ListaJugadas></ListaJugadas>
           

           
        </View>
    )
}

const style = StyleSheet.create({
    grid: { alignItems: 'center', marginTop: 45 },
    card: {
        width: 70,
        height: 80,
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#9e9e9e',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4


    }
})