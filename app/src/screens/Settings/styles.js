import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00A7E1',
        alignItems: 'center',

    },
    signIn: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 40,
        marginRight: 130,
        color: 'white',
        marginBottom:50,
    },
    buttonContainer: {
        height: 50,
        backgroundColor: 'rgba(252, 252, 252, 0.2)',
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: 0.1,
        borderColor: '#DADADA',
        width: 320,
        marginBottom: 20,
    },
    button: {
        paddingLeft: 15,
        color: 'white',
        fontSize: 18,
    },
    top: {
        flexDirection: 'row',
    },
    icon: {
        flex: 1,
        marginTop: 45,
        justifyContent: 'flex-start',
    },
    iconBar: {
        marginLeft: 10,
    }
});



export default styles;
