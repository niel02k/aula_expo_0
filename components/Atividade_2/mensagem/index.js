
import { View, Text } from 'react-native';

import styles from './styles';


export default function Mensagem({comida , região =''} ) {
    return (
        <View style={styles.viewmensagem}>
            <input></input>
            <Text style={styles.mensagem}>{`olá ${Nome} ${Sobrenome}`}</Text>
        </View>
    );
}