import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';
import ImageBlurBackground from '../../shared/ImageBlurBackground';
import Logo from '../../shared/Logo';
import Button from '../../shared/Button';

export default class Start extends React.PureComponent {

  goToLogin = () => this.props.navigation.navigate('Login');

  goToRegister = () => this.props.navigation.navigate('Register');
    
    goToToday = () => this.props.navigation.navigate('Today');

  render() {
    return (
      <ImageBlurBackground style={styles.splashContainer}>
        <View style={[styles.container, styles.centerize]}>
          <Logo />
        </View>
        <View style={[styles.container, styles.centerize, styles.textContainer]}>
          <Text style={styles.title}>Welcome to Swifty</Text>
          <Text style={styles.subTitle}>
            Swifty is a walking steps and distance tracker.
            Register now and compete with other city hikers.
          </Text>
        </View>
        <View style={[styles.container, styles.buttons]}>
          <View style={styles.buttonWrapper}>
            <Button onPress={this.goToLogin} type="secondary">Sign In</Button>
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={this.goToRegister}>Register</Button>
          </View>
        <View style={styles.buttonWrapper}>
            <Button onPress={this.goToToday}>Today</Button>
          </View>
        </View>
      </ImageBlurBackground>
    );
  }

}

Start.propTypes = {
  navigation: PropTypes.object.isRequired, // eslint-disable-line
};
