import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';
import { primary, primaryLight } from '../../config/colours';

export default class DefaultBackground extends React.PureComponent {

  render() {
    return (
      <LinearGradient
        colors={[
          primaryLight,
          '#1092D5',
          '#1788D0',
          '#2378C8',
          '#2A6EC2',
          primary,
        ]}
        start={{ x: 0.5, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        style={styles.container}
      >
        {this.props.children}
      </LinearGradient>
    );
  }

}

DefaultBackground.propTypes = {
  children: PropTypes.node.isRequired,
};
