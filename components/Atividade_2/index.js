import {View , Text } from 'react-native';
import styles from './style';

export default function Atividade_2 (){
  return (
    <View style={styles.container}>
   <Text style={styles.titulo}> Atividade 2</Text>
         <Mensagem Time='Marcos' Jogador='Freitas'/>
            <Mensagem Time='Daniel' Jogador='Freitas'/>
            <Mensagem Time='Niel' Jogador=''/>

    </View>
  );
}

