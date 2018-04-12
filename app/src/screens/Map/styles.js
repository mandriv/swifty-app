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
        marginTop: 45,
        marginRight: 150,
        color: 'white',
        marginBottom: 40,
    },
    iconCircle: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#1e90ff'
    },
    data: {
        color: 'gold',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    bottomTab: {
        width: 100
    },
    transperent:{
      color:'transparent'  
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
