import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { white } from '../../../config/colours';

import Button from '../../../shared/Button';
import styles from './styles';


export default class LoginForm extends React.Component {

  render() {
    return (
      <View style={[styles.container, styles.root]}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid={white}
            onSubmitEditing={() => this.passwordInput.focus()}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            // eslint-disable-next-line
            ref={input => this.passwordInput= input}
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button fluid>
            Go
          </Button>
        </View>
      </View>
    );
  }

}
