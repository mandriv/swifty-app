import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { white, secondaryLight } from '../../../config/colours';
import styles from './styles';
import Button from '../../../shared/Button';


export default class RegisterForm extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
          <Text style={styles.label}>Username</Text>
        </View>
        <View style={styles.inputAndIcon}>
          <Icon style={styles.icon} name="user" size={20} color={secondaryLight} />
          <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid={white}
            onSubmitEditing={() => this.emailInput.focus()}
          />
        </View>
        <Text style={[styles.label, styles.mailLabel]}>E-mail</Text>
        <View style={styles.inputAndIcon}>
          <Icon style={styles.icon} name="at" size={20} color={secondaryLight} />
          <TextInput
            ref={input => this.emailInput = input} // eslint-disable-line
            style={styles.input}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid={white}
            onSubmitEditing={() => this.passwordInput.focus()}
          />
        </View>
        <View style={styles.leftView}>
          <Text style={styles.label}>Password</Text>
        </View>
        <View style={styles.inputAndIcon}>
          <Icon style={styles.icon} name="lock" size={20} color={secondaryLight} />
          <TextInput
            ref={input => this.passwordInput = input} // eslint-disable-line
            style={styles.input}
            underlineColorAndroid={white}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <View style={styles.button}>
          <Button type="primary" fluid>
            Go
          </Button>
        </View>
      </View>
    );
  }

}
