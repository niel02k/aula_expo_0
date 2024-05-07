import { View, Text } from 'react-native';
import Mensagem from './mensagem';
import styles from './styles';


function Exemplo2() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo2</Text>

            <Mensagem Nome='Marcos' Sobrenome='Freitas' />
            <Mensagem Nome='Daniel' Sobrenome='Freitas' />
            <Mensagem Nome='Niel' Sobrenome='' />

        </View>
    );
}
export default Exemplo2;