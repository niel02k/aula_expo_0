import {View , Text } from 'react-native';
import styles from './style';
import Mensagem from './mensagem';

export default function Atividade_2 (){
  return (
    <View style={styles.container}>
   <Text style={styles.titulo}> Atividade 2</Text>
  
            <Mensagem Time='Boston Celtics' Jogador=''/>
            <Mensagem Time='Golden State Warriors' Jogador=' '/>
            <Mensagem Time='Brooklyn Nets' Jogador=''/>
            <Mensagem Time='Los Angeles Lakers' Jogador=''/>


    </View>
  );
};  

