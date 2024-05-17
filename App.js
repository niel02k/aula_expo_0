import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Atividade_3 from './components/Atividade_3';

import Atividade_2 from './components/Atividade_2';

import Exemplo_0 from'./components/exemplo_1';
import Exemplo2 from'./components/exemplo_2';
import Exemplo_3 from './components/exemplo_3';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade_3 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#733ba1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
});