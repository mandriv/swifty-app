import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { white, secondaryLight } from '../../../config/colours';

import Button from '../../../shared/Button';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RegisterForm extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Text style={styles.label}>Username</Text>
        </View>
        <View style={styles.inputAndIcon}>
          <Icon style={styles.icon} name="user" size={20} color="#F2994A" />
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid="#fff"
            onSubmitEditing={() => this.emailInput.focus()}
          />
        </View>
        <Text style={[styles.label, styles.mailLabel]}>E-mail</Text>

        <View style={styles.inputAndIcon}>
          <Icon style={styles.icon} name="at" size={20} color="#F2994A" />
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid="#fff"
            onSubmitEditing={() => this.passwordInput.focus()}
          />
        </View>
        <View style={styles.leftView}>
          <Text style={styles.label}>Password</Text>
        </View>
        <View style={styles.inputAndIcon}>
          <Icon style={styles.icon} name="lock" size={20} color="#F2994A" />
          <TextInput
            style={styles.input}
            ref={input => this.passwordInput = input}
            underlineColorAndroid="#fff"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button}>Go</Text>
        </TouchableOpacity>
      </View>
    );
  }

}
