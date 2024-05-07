import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        width: '100%',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: 'black'
    },

    botaoPress: {
       
        backgroundColor: '#733ba1'
    },

    botao: {
        borderWidth: 3,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#733ba1',
        width: '80%'
    },


    txtbotao: {
        color: '#733ba1',
        fontSize: 25,

    }
});

export default styles;