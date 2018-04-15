import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import DefaultBackground from '../../shared/DefaultBackground';
import WithHeader from '../../shared/HoC/WithHeader';
import styles from './styles';

class Leaderboard extends React.PureComponent {

  render() {
    return (
      <DefaultBackground>
        <View style={styles.container}>
          <Text>Leaderboard</Text>
        </View>
      </DefaultBackground>
    );
  }

}

Leaderboard.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line
}

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps)(Leaderboard);
