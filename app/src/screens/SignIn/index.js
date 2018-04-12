import React from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import styles from './styles';
import LoginForm from './LoginForm';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SignIn extends React.Component {
 render() {
    return (
      
      <View
      style={styles.container}>
       <View style={styles.shape} />
        <View style={styles.adjusted}>
        <Text style = {styles.signIn}>Sign In</Text>
        <View>
</View>
    <View style={styles.formContainer}>
        <LoginForm/>
        </View>
        <View style={styles.social}>
        <TouchableOpacity style={[styles.circle,styles.circleLeft]} >
        <Icon style={styles.button} name="facebook" size={40} color="#FDFFFF"/>
        </TouchableOpacity>
         <TouchableOpacity style={styles.circle} >
          <Icon style={styles.button} name="google" size={40} color="#FDFFFF"/>
        </TouchableOpacity>
          </View>
          </View>
          <View style={styles.shape2} />
      </View>
    );
  }
}
