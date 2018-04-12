import { StyleSheet } from 'react-native';
import { white, primaryLight, secondaryLight } from '../../config/colours';
import { primary } from '../../config/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFFFF',
    
  },
    signIn:{
      textAlign:'center', 
   fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30,
        color:'#222222',
  },
  shape: {
  width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 460,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: '#00A7E1',
  
},shape2:{
  width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 380,
    borderBottomWidth: 80,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#00A7E1',
    flex:1, bottom: 0,
    right: 0
},
circle: {
    width: 75,
    height: 75,
    borderRadius: 100/2,
    backgroundColor: '#F2994A',
        shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
shadowOpacity: 0.25,
  elevation: 5,
  alignItems:'center',
    justifyContent:'center',
},
social:{
  flex:1,
  justifyContent: 'center',
  marginTop:60,
  flexDirection: 'row',
   alignItems:'center',
}, circleLeft: {
  marginRight: 50,
}
    
    
});
export default styles;
