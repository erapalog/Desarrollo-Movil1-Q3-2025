import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './Componentes/NavBar';
import BancoProvider from './Provider/BancoProvider';

export default function App() {

  return (
   
    <BancoProvider>
  <NavBar></NavBar>
    </BancoProvider>
    
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
