import React from 'react';
import PropTypes from 'prop-types';
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
          onChangeText={(text) => {
            this.props.setFieldValue('username', text);
            this.props.setFieldTouched('username', true);
          }}
          value={this.props.values.username}
          error={this.props.touched.username && this.props.errors.username}
        />
        <Input
          ref={input => this.emailInput = input} // eslint-disable-line
          label="E-mail"
          icon="at"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(text) => {
            this.props.setFieldValue('email', text);
            this.props.setFieldTouched('email', true);
          }}
          value={this.props.values.email}
          error={this.props.touched.email && this.props.errors.email}
        />
        <Input
          ref={input => this.passwordInput = input} // eslint-disable-line
          label="Password"
          icon="lock"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(text) => {
            this.props.setFieldValue('password', text);
            this.props.setFieldTouched('password', true);
          }}
          value={this.props.values.password}
          error={this.props.touched.password && this.props.errors.password}
          onSubmitEditing={this.props.submitForm}
        />
        <View style={styles.button}>
          <Button
            type="primary"
            fluid
            onPress={this.props.submitForm}
            loading={this.props.loading}
          >
            Go
          </Button>
        </View>
      </View>
    );
  }

}

RegisterForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  values: PropTypes.object.isRequired, // eslint-disable-line
  touched: PropTypes.object.isRequired, // eslint-disable-line
  errors: PropTypes.object.isRequired, // eslint-disable-line
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};
