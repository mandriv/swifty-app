import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import { offWhite } from '../../config/colours';
import styles from './styles';

class Header extends React.PureComponent {

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.flex}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerToggle')}>
            <Icon name="bars" size={30} color={offWhite} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.title]}>{this.props.title}</Text>
        <View style={styles.flex} />
      </View>
    );
  }

}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired, // eslint-disable-line
};

export default withNavigation(Header);
