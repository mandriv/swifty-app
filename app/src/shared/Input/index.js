import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { white, secondaryLight } from '../../config/colours';

import styles from './styles';

export default class Input extends React.PureComponent {

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.label}>{this.props.label}</Text>
        <View style={styles.inputAndIcon}>
          {
            this.props.icon &&
            <Icon style={styles.icon} name={this.props.icon} size={20} color={secondaryLight} />
          }
          <TextInput
            style={styles.input}
            underlineColorAndroid={white}
            {...this.props}
          />
        </View>
        {
          this.props.error &&
          <Text style={styles.errorMsg}>{this.props.error}</Text>
        }
      </View>
    );
  }

}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  icon: '',
  error: '',
};
