import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box'

export default class Profile extends React.Component {
 render() {
    return (
      
 <LinearGradient colors={['#00A7E1', '#1985CF', '#3066BE']} 
      style={styles.container}>
        <View style = {styles.top}>
        <View style={styles.icon}>
            <Icon style={styles.iconBar} name="bars" size={30} color="#FDFFFF"/>
        </View>
        <Text style = {styles.signIn}>Settings</Text>
        </View>
  <TouchableOpacity style = {styles.buttonContainer}
>
     <Text style = {styles.button}>Units</Text>
        <View style={styles.box}>
        <CheckBox 
        checkBoxColor='#FCFCFC'
        />
        <Text style = {styles.unit}>KM</Text>
<CheckBox style={{marginLeft:10}}
        checkBoxColor='#FCFCFC'
   />
        <Text style = {styles.unit}>MI</Text>
        </View>
</TouchableOpacity>
<TouchableOpacity style = {styles.buttonContainer}>
     <Text style = {styles.button}>Modify Bio</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.buttonContainer}>
     <Text style = {styles.button}>Change profile picture</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.buttonContainer}>
     <Text style = {styles.button}>Change username</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.buttonContainer}>
     <Text style = {styles.button}>Clear saved data</Text>
</TouchableOpacity>
<TouchableOpacity style = {styles.buttonContainer}>
     <Text style = {styles.button}>Logout</Text>
</TouchableOpacity>
      </LinearGradient>
    );
  }
}