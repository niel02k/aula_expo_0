import { View, Text } from 'react-native';

import styles from './styles';


export default function Mensagem({ Nome, Sobrenome = '' }) {
    return (
        <View style={styles.viewmensagem}>
            <Text style={styles.mensagem}>{`olá ${Nome} ${Sobrenome}`}</Text>
        </View>
    );
}