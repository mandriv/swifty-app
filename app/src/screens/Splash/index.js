import React from 'react';
import { View, Text } from 'react-native';
import Spinner from 'react-native-spinkit';

import styles from './styles';
import ImageBlurBackground from '../../shared/ImageBlurBackground';
import Logo from '../../shared/Logo';
import { offWhite } from '../../config/colours';

export default class Splash extends React.PureComponent {

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
        <View style={[styles.container, styles.centerize]}>
          <Spinner type="Circle" color={offWhite} />
          <Text style={styles.loadingText}>Loading</Text>
        </View>
      </ImageBlurBackground>
    );
  }

}
