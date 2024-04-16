import { View, Text } from 'react-native';

import styles from './styles';


export default function Mensagem(nome,sobrenome) {
    return (
        <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>{nome+sobrenome}</Text>
        </View>
    );
}