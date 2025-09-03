import { View, Text ,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Accelerometer } from 'expo-sensors';

export default function Acelerometro() {

    const [data, setData] = useState({ x: 0, y: 0, z: 0 });

    const [ballPosition, setBallPosition] = useState({ x: 150, y: 300 ,z:100});

    const [ballColor, setBallColor] = useState("blue"); 

       const updateBallPosition = ({ x, y,z }:any) => {
        setBallPosition((prev) => ({
          x: Math.min(Math.max(prev.x + x * 10, 0), 300), // Mantener dentro de los límites del eje X
          y: Math.min(Math.max(prev.y + y * 10, 0), 600), // Mantener dentro de los límites del eje Y
          z: Math.min(Math.max(prev.z + z * 10, 0), 600), 
        }));
      };

      useEffect(() => {
        const subscription = Accelerometer.addListener((accelerometerData) => {
          //console.log(accelerometerData)
          setData(accelerometerData);
          updateBallPosition(accelerometerData);

          setBallColor(generateRandomColor());
        });
    
        Accelerometer.setUpdateInterval(16); // Actualizaciones cada ~16ms (60 FPS)
    
        return () => subscription.remove(); // Limpiar la suscripción al desmontar
      }, []);

      const generateRandomColor = () => {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)})`;
        return randomColor;
      };

    

      return (
        <View style={styles.container}>
          <View
            style={[
              styles.ball,
              {
                left: ballPosition.x,
                top: ballPosition.y,
                right:ballPosition.z,
                backgroundColor: ballColor,
              },
            ]}
          />
          <Text style={styles.text}>
            Mueve el dispositivo para mover la bola.
          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    ball: {
      position: "absolute",
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: "blue",
    },
    text: {
      position: "absolute",
      bottom: 50,
      fontSize: 18,
      fontWeight: "bold",
    },
  });