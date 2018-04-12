import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Button from '../../../shared/Button';
import Input from '../../../shared/Input';


export default class RegisterForm extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Input
          label="Username"
          icon="user"
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={() => this.emailInput.focus()}
        />
        <Input
          ref={input => this.emailInput = input} // eslint-disable-line
          label="E-mail"
          icon="at"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
        />
        <Input
          ref={input => this.passwordInput = input} // eslint-disable-line
          label="Password"
          icon="lock"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
        />
        <View style={styles.button}>
          <Button type="primary" fluid>
            Go
          </Button>
        </View>
      </View>
    );
  }

}
