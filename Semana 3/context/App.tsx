import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SaludosComponent from './Componentes/SaludosComponent';
import SaludoComponent2 from './Componentes/SaludoComponent2';
import ConsumidoComponents from './Componentes/ConsumidoComponents';
import SaludoProvider from './Provider/SaludoProvider';
import InputComponent from './Componentes/InputComponent';
import TareasProvider from './Provider/TareasProvider';
import TareaComponent from './Componentes/TareaComponent';
import ListadoTareas from './Componentes/ListadoTareas';

export default function App() {
  return (
    <View style={styles.container}>

      {/*<SaludosComponent nombre={'Erick'}></SaludosComponent>
      <SaludoComponent2 nombre={"erick"} apellido={'rapalo'}></SaludoComponent2>*/}


      <SaludoProvider>
        <ConsumidoComponents></ConsumidoComponents>
        <InputComponent></InputComponent>

        <TareasProvider>
          <TareaComponent></TareaComponent>
          <ListadoTareas></ListadoTareas>
        </TareasProvider>

      </SaludoProvider>


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
