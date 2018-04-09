import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

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
    if (type === 'primary') txtStyles.push(styles.textPrimary);

    return (
      <TouchableOpacity style={btnStyles} onPress={this.props.onPress}>
        <Text style={txtStyles}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    );
  }

}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary']),
  fluid: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  fluid: false,
  onPress: () => null,
};
