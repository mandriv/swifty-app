import React from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import styles from './styles';
import LoginForm from './LoginForm';

export default class SignIn extends React.Component {
  render() {
    return (
      <View style={[styles.container, styles.root]}>
        <View style={[styles.shape, styles.topShape]} />
        <View style={[styles.shape, styles.bottomShape]} />
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyboardAvoidingView}
        >

          <View style={[styles.container, styles.headerContainer]}>
            <Text style={styles.header}>
              Sign In
            </Text>
          </View>
          <LoginForm />
        </KeyboardAvoidingView>
        <View style={[styles.container, styles.social]}>
          <TouchableOpacity style={[styles.circle, styles.circleLeft]}>
            <Text style={styles.button}>
              f
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Text style={styles.button}>
              G
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
