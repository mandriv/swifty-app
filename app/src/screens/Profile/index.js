import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';

export default class Profile extends React.Component {
 render() {
    return (
      
 <LinearGradient colors={['#00A7E1', '#1985CF', '#3066BE']} 
      style={styles.container}>
        <View style = {styles.top}>
        <View style={styles.icon}>
            <Icon style={styles.iconBar} name="bars" size={30} color="#FDFFFF"/>
        </View>
        <Text style = {styles.signIn}>Profile</Text>
        </View>
   <Text style = {styles.username}>Mandriv</Text>
    <Image source={require('./userimage.jpg')} style={styles.circle}/>
    <Text style = {styles.rank}>#234 in global ranking</Text>
     <Text style = {styles.bio}>Lorem ipsum dolor sit amet, consectetuer ad elit. Aenean commodo ligula eget dolor. Aenean massa.</Text>
        <View style={styles.results}>
        <View style = {[styles.oneOfFour, styles.leftMost]}>
   <Text style ={styles.category}>STEPS</Text>
   <Text style ={styles.result}>13 013</Text>
    </View>
    <View style = {styles.oneOfFour}>
   <Text style ={styles.category}>DISTANCE</Text>
   <Text style ={styles.result}>9.4km</Text>
    </View>
        <View style = {styles.oneOfFour}>
   <Text style ={styles.category}>CALORIES</Text>
   <Text style ={styles.result}>4583 kcal</Text>
    </View>
      
       
         <View style = {styles.oneOfFour}>
   <Text style ={styles.category}>SPEED</Text>
   <Text style ={styles.result}>5.4 km/h</Text>
    </View>
       </View>
      </LinearGradient>
    );
  }
}
