import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A7E1',
    alignItems:'center',
    
  },
    signIn: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        marginTop: 40,
        marginRight: 135,
        color: 'white',
        marginBottom:30,
    },
  username:{
     textAlign:'center', 
   fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 30,
        marginTop:20,
        color:'white'
  },
circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    borderColor: 'white',
    borderWidth:1,
    marginBottom:30,
  
},
rank:{
  color:'#FFB97A',
  fontSize:15,
  fontWeight:'bold'
},bio:{
  color:'white',
  marginTop:30,
  paddingHorizontal:20,
},
results:{
  flex:1,
  justifyContent: 'center',
  marginTop:40,
  flexDirection: 'row',
   alignItems:'center',
},category:{
  marginRight:30,
  marginBottom:5,
  color:'white',
  textAlign:'center'
},result:{
  color:'white',
  fontWeight:'bold',
}, leftMost:{
  marginLeft:20,
}, top:{
    flexDirection: 'row',
},icon:{
    flex:1,
    marginTop:45,
    justifyContent:'flex-start',
},iconBar:{
    marginLeft:10,
}
});



export default styles;
