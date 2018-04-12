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
    activityTitle: {
        paddingTop: 30,
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    },
    activityText: {
        paddingTop: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    circle: {
        width: 220,
        height: 220,
        borderRadius: 220 / 2,
        borderColor: '#4C64FF',
        borderWidth: 5,
    },
    stats: {
        color: 'white',
        textAlign: 'center',
        margin: 5
    },
    progress: {
        flexDirection: 'row',
        height: 70,
        margin: 40
    },
    progressTab: {
        margin: 10,
        textAlign: 'center'
    },
    chart: {

    },
    icon: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
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
        fontSize: 20,
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16
    },
    bottomTab: {
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
