
import { View, Text } from 'react-native';

import styles from './styles';


export default function Mensagem({Time , Jogador =''} ) {
    return (
        <View style={styles.viewmensagem}>
            
            <Text style={styles.mensagem}>{` ${Time}${Jogador}`}</Text>
             
        </View>
    );
}