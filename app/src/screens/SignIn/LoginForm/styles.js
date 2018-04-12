import { StyleSheet } from 'react-native';
import { black, blackLight } from '../../../config/colours';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 

  },
    input:{
     width:220,
    height:45,
        paddingLeft:10,
    
  },
    label:{
      fontSize:12,
      justifyContent:'flex-start',
       color: '#222222',
        marginRight:190,
    },buttonContainer:{
      height:45,
      backgroundColor:'#00A7E1',
      paddingVertical:10,
      borderRadius:5,
      width:230,
       shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
shadowOpacity: 0.25,
  elevation: 5,
    },
    button:{
    textAlign:'center',
    color:'white',
    fontSize:18,
    },inputAndIcon:{
    flexDirection: 'row',
         height:45,
       backgroundColor:'rgba(255,255,255,0.7)',
        marginBottom:20,
        width:250,
    paddingLeft: 10,
        borderColor: '#605c5c',
        borderWidth:1,
        borderRadius:5,
    },icon:{
        flex:0,
        marginTop:10,
    }
   
});

export default styles;
