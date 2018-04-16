import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

export default class UserItem extends React.PureComponent {

  render() {
    const {
      rank,
      user,
      type,
      you,
    } = this.props;
    const userStyles = you === user.username ? [styles.user, styles.you] : styles.user;
    return (
      <View style={styles.container}>
        <View style={styles.rankContainer}>
          <Text style={styles.rank}>
            {rank}
          </Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={userStyles}>
            {user.username}
          </Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>
            {Math.round(user[type], 2)}
          </Text>
        </View>
      </View>
    );
  }

}

UserItem.propTypes = {
  user: PropTypes.object.isRequired, // eslint-disable-line
  rank: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
