import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { white } from '../../config/colours';
import styles from './styles';
import EnhacedLoginForm from './LoginForm/EnhacedLoginForm';

export default class SignIn extends React.Component {

  state = {
    loading: false,
  };

  handleSubmit = (values) => {
    this.setState({ loading: true });
    console.log(values);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shape} />
        <View style={styles.adjusted}>
          <Text style={styles.signIn}>Sign In</Text>
          <View />
          <View style={styles.formContainer}>
            <EnhacedLoginForm
              onSubmit={this.handleSubmit}
              loading={this.state.loading}
            />
          </View>
          <View style={styles.social}>
            <TouchableOpacity style={[styles.circle, styles.circleLeft]} >
              <Icon style={styles.button} name="facebook" size={40} color={white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle} >
              <Icon style={styles.button} name="google" size={40} color={white} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.shape2} />
      </View>
    );
  }

}
