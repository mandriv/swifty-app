import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import EnhacedRegisterForm from './RegisterForm/EnhacedRegisterForm';
import { white } from '../../config/colours';
import { register } from '../../services/auth';


export default class Register extends React.Component {

  state = {
    loading: false,
  }

  handleSubmit = async (values) => {
    this.setState({ loading: true });
    await register(values);
    console.log(values);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.shape} />
        <View style={styles.adjusted}>
          <Text style={styles.signIn}>Register</Text>
          <View style={styles.formContainer}>
            <EnhacedRegisterForm
              onSubmit={this.handleSubmit}
              loading={this.state.loading}
            />
          </View>
          <View style={styles.social}>
            <TouchableOpacity style={[styles.circle, styles.circleLeft]}>
              <Icon style={styles.button} name="facebook" size={40} color={white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle} >
              <Icon style={styles.button} name="google" size={40} color={white} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.shape2} />
      </ScrollView>
    );
  }

}
