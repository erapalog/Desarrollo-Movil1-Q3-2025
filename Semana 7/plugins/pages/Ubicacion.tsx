import { View, Text, Alert, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location';


export default function Ubicacion() {

    const [selectlocacion, setSelectlocacion]= useState<Location.LocationObject | null>(null);

    useEffect(()=>{
        (async ()=>{

            let {status}= await Location.requestForegroundPermissionsAsync()

            if(status!=='granted'){
                Alert.alert('No ha sido otorgado el permiso de locacion, se debe activar la ubicacion');
                return
            }

            let ubicacion= await Location.getCurrentPositionAsync();

            setSelectlocacion(ubicacion)

        })();

    },[])

  return (
    <View style={style.container}>
     
     {
        selectlocacion && (

              <MapView

              style={style.map}
                initialRegion={{
                    latitude: selectlocacion?.coords.latitude || 0,
                    longitude:selectlocacion?.coords.longitude || 0,
                    latitudeDelta:0.0922,
                    longitudeDelta:0.0421
                }}
              >
                <Marker 
                    coordinate={{
                        latitude: selectlocacion?.coords.latitude || 0,
                        longitude:selectlocacion?.coords.longitude || 0,
                    }}
                    title='Mi ubicacion Actual'
                    description='Estoy en mi casa'
                >

                </Marker>

             </MapView>

        )
        
     }

   
    </View>
  )
}

const style= StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center'
    },
    map:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    }
})