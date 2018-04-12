import React from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import styles from './styles';
import RegisterForm from './RegisterForm';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Register extends React.Component {
  render() {
    return (
      
      <View
      style={styles.container}>
       <View style={styles.shape} />
        <View style={styles.adjusted}>
        <Text style = {styles.signIn}>Register</Text>
        <View>
</View>
    <View style={styles.formContainer}>
        <RegisterForm/>
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
