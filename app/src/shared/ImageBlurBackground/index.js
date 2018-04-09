import React from 'react';
import PropTypes from 'prop-types';
import { View, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { primary, primaryLight, rgba } from '../../config/colours';

export default class Splash extends React.PureComponent {

  componentDidMount() {

  }

  OPACITY_LEVEL = 0.7;

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./background-photo.png')} style={styles.image}>
          <LinearGradient
            colors={[
              rgba(primaryLight, this.OPACITY_LEVEL),
              rgba(primary, this.OPACITY_LEVEL),
            ]}
            style={styles.container}
          >
            {this.props.children}
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

}

Splash.propTypes = {
  children: PropTypes.node.isRequired,
};
