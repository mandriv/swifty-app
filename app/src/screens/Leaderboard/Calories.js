import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Leaderboard from '.';
import WithHeader from '../../shared/HoC/WithHeader';


class LeaderboardCalories extends React.PureComponent {

  static navigationOptions = {
    title: 'Calories',
    tabBarIcon: ({ tintColor }) => (<Icon name="fire" size={25} color={tintColor} />),
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

export default WithHeader(LeaderboardCalories, 'Leaderboard');
