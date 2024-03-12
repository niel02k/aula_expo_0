import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_0 from './components/exemplo_1';
import Atividade_1 from './components/Atividade_1';






export default function App() {
  return (
    <View style={styles.container}> 
      
     <Atividade_1 /> 
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
