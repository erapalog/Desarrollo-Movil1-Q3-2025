import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import AlumnosComponente from './componentes/AlumnosComponente';

export default function App() {

  const [contador, setContador]= useState<number>(0);

  function sumarContador(){
    setContador(contador+1)
  }

  function restarContador(){    
    if(contador==0) return
    setContador(contador-1)
  }

  useEffect(()=>{

    Alert.alert("El componente ha sido cargado")
    setContador(30)
  },[]);


  return (
    <View style={styles.container}>
      <Text>Aplicacion con estados</Text>

      <Text>Valor contador {contador}</Text>
     
     <Button title='Aumentar Contador' onPress={sumarContador}></Button>
     <Button title='Disminuir Contador' onPress={restarContador}></Button>

     <AlumnosComponente></AlumnosComponente>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
