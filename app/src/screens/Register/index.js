import React from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

import styles from './styles';
import RegisterForm from './RegisterForm';

export default class Register extends React.Component {
  render() {
    return (
      <View style={[styles.container, styles.root]}>
        <View style={[styles.shape, styles.topShape]} />
        <View style={[styles.shape, styles.bottomShape]} />
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.header}>
              Register
            </Text>
          </View>
          <RegisterForm />
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
