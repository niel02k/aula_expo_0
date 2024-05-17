import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function Atividade_3() {
    const [numero, setNumero] = useState(0);

    function mais1() {
        setNumero(numero + 1);
    }

    function menos1() {
        setNumero(numero - 1);
    }

    function zerar() {
        setNumero(0); // Corrigido para setar o número para 0
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>

            <View style={styles.numberContainer}>
                <Pressable
                    onPress={menos1}
                    style={({ pressed }) => (pressed ? [styles.botao, styles.botaoPress] : styles.botao)}
                >
                    <Text style={styles.txtbotao}>- 1</Text>
                </Pressable>

                <Text style={styles.txtNumero}>{numero}</Text>

                <Pressable
                    onPress={mais1}
                    style={({ pressed }) => (pressed 
                    ?
                     [styles.botao, styles.botaoPress]
                      :
                       styles.botao)}
                >
                    <Text style={styles.txtbotao}>+ 1</Text>
                </Pressable>
            </View>

            <Pressable
                onPress={zerar}
                style={({ pressed }) => (pressed
                    ?
                    [styles.botao, styles.botaoPress]
                    :
                    styles.botao)}
            >
                <Text style={styles.txtbotao}>zerar</Text>
            </Pressable>
        </View>
    );
}

