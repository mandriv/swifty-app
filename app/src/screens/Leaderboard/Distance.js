import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Leaderboard from '.';
import WithHeader from '../../shared/HoC/WithHeader';


class LeaderboardDistance extends React.PureComponent {

  static navigationOptions = {
    title: 'Distance',
    tabBarIcon: ({ tintColor }) => (<Icon name="road" size={25} color={tintColor} />),
  };

  render() {
    return (
      <Leaderboard
        type="distance"
      />
    );
  }

}

export default WithHeader(LeaderboardDistance, 'Leaderboard');
