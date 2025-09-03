import { View, Text, Button, Image,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

export default function Camara() {


    const [image, setImage] = useState('')
    //funcion para abrir la galeria del telefono

    async function pickImage() {

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            console.log(result.assets[0])
            setImage(result.assets[0].uri)
        }

    }


    //funcion para tomar fotografia
    async function takePhoto(){
        const result= await ImagePicker.launchCameraAsync({
            allowsEditing:true,
            quality:1
        })

        if (!result.canceled) {
            console.log(result.assets[0])
            setImage(result.assets[0].uri)
        }


    }
    return (
        <View>
            <Text>Camara</Text>
            <Button onPress={pickImage} title='Abrir Galeria'></Button>
            <Button onPress={takePhoto} title='Tomar Fotografia'></Button>

            {
                image && (
                    <View style={styles.imageContainer}>
                        <Text>Imagen Seleccionada</Text>
                        <Image source={{ uri: image }} style={styles.image}></Image>
                    </View>

                )
            }
        </View>
    )
}

const styles= StyleSheet.create({
    imageContainer:{
        marginTop:30,
        alignItems:'center'
    },
    image:{
        height:200,
        width:200,
        borderRadius:10
    }
})