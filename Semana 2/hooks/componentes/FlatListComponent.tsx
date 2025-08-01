import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { ListaEstudianteProps } from '../Modelos/ListaEstudianteProps'

export default function FlatListComponent(props: ListaEstudianteProps) {
  return (

    <FlatList data={props.listaEstudiante}
      keyExtractor={(item, index) => item.nombre}
      renderItem={({ item, index }) => (
        <View style={style.itemContenedor}>
          <Text key={index} style={style.itemText}> Numero - {index} Nombre Estudiante: {item.nombre}</Text>
        </View>
      )}
    >

    </FlatList>
  )
}

const style= StyleSheet.create({
  
  itemContenedor:{
    padding:10,
    borderBottomWidth:1,
    borderColor:'#ccc'
  },
  itemText:{
      fontSize:10
  }
})