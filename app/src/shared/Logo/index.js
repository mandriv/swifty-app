import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

/*
  Logo component
*/

export default class Logo extends React.PureComponent {

  render() {
    return (
      <Image source={require('./logo.png')} style={styles.logo} />
    );
  }

}

Logo.propTypes = {

};
