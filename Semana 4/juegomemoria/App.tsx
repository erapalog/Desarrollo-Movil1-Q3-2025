import { StyleSheet, Text, View } from 'react-native';
import JuegosProvider from './Provider/JuegosProvider';
import Navegacion from './Componentes/Navegacion';

export default function App() {
  return (
      <JuegosProvider>
        <Navegacion></Navegacion>
      </JuegosProvider>
      
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
