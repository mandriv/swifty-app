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
        marginRight: 80,
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
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        justifyContent:'center',
        alignItems:'center',
      
    },
      innerCircle:{
    width: 190,
        height: 190,
          borderRadius: 210 / 2,
          backgroundColor:'#1985CF',
},
    stats: {
        color: 'white',
        textAlign: 'center',
        margin: 5
    },
    progress: {
        flexDirection: 'row',
        height: 70,
        margin: 30
    },
    progressTab: {
        margin: 10,
        alignItems: 'center'
    },
    chart: {

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
