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
        fontSize: 25,
        marginTop: 42,
        marginRight: 100,
        color: 'white',
        marginBottom: 50,
    },
    buttonContainer: {
        height: 60,
        backgroundColor: 'rgba(252, 252, 252, 0.2)',
        borderRadius: 5,
        width: 320,
        marginBottom: 15,
    },
    usernameContainer: {
        marginHorizontal:10,
        width: 130,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    },
    scroll:{
    
},
    imageCircle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        borderColor: 'white',
        borderWidth: 1,
        marginTop:10,
        marginRight:20,
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
    iconFooter: {
        color: 'white',
        textAlign: 'center'
    },
    footer: {
        flex:1,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop:10,
        backgroundColor: '#1e90ff'
    },
    user:{
    flex:1,
    flexDirection: 'row',
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
    },
});



export default styles;
