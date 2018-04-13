import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import Spinner from 'react-native-spinkit';

import { offWhite } from '../../config/colours';
import styles from './styles';

/*
  Button component
*/

export default class Button extends Component {

  render() {
    const { type, fluid } = this.props;
    // Container styles
    const btnStyles = [styles.button, styles[type]];
    if (fluid) btnStyles.push(styles.fluid);
    // Text styles
    const txtStyles = [styles.text];
    return (
      <TouchableOpacity style={btnStyles} onPress={this.props.onPress}>
        { this.props.loading &&
          <Spinner type="FadingCircleAlt" color={offWhite} size={20} />
        }
        { !this.props.loading &&
          <Text style={txtStyles}>
            {this.props.children}
          </Text>
        }
      </TouchableOpacity>
    );
  }

}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
  fluid: PropTypes.bool,
  loading: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  fluid: false,
  loading: false,
  onPress: () => null,
};
