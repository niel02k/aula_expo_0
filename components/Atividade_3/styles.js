import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: 'black',
    },
    botaoPress: {
        backgroundColor: '#733ba1',
    },
    botao: {
        borderWidth: 3,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#733ba1',
        width: '40%',
        marginHorizontal: 10,
    },
    txtbotao: {
        color: '#733ba1',
        fontSize: 25,
    },
    txtNumero: {
        color: '#f774e2',
        fontSize: 35,
        marginVertical: 10,
    },
    numberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
});

export default styles;
