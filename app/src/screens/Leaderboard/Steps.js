import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Leaderboard from '.';
import WithHeader from '../../shared/HoC/WithHeader';

class LeaderboardSteps extends React.PureComponent {

  static navigationOptions = {
    title: 'Steps',
    drawerLabel: 'Leaderboard',
    tabBarIcon: ({ tintColor }) => (<Icon name="md-walk" size={25} color={tintColor} />),
  };

  render() {
    const data = [];
    return (
      <Leaderboard
        data={data}
      />
    );
  }

}

export default WithHeader(LeaderboardSteps, 'Leaderboard');
