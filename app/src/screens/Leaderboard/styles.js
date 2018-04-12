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
        marginBottom: 50,
    },
    buttonContainer: {
        height: 60,
        backgroundColor: 'rgba(252, 252, 252, 0.2)',
        borderRadius: 5,
        borderWidth: 0.1,
        borderColor: '#DADADA',
        width: 320,
        marginBottom: 20,
    },
    usernameContainer: {
        width: 150,
        marginBottom: 15
    },
    username: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    imageCircle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        borderColor: 'white',
        borderWidth: 1,
        margin: 10,
        flex: 1
    },
    result: {
        color: 'white',
        fontWeight: 'bold',
    },
    category: {
        marginBottom: 5,
        marginTop: 5,
        color: 'white',
        textAlign: 'center',
        fontSize: 14
    },
    icon: {
        color: 'white',
        textAlign: 'center'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#1e90ff'
    },
    tab: {
        width: 100
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
