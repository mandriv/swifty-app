import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Today from '.';
import WithHeader from '../../shared/HoC/WithHeader';

class TodaySteps extends React.PureComponent {

  static navigationOptions = {
    title: 'Today\'s activity',
    tabBarLabel: 'Today',
    drawerLabel: 'Today',
    tabBarIcon: ({ tintColor }) => (<Icon name="md-walk" size={25} color={tintColor} />),
  };

  render() {
    return (
      <Today
        current="steps"
        unit="steps"
      />
    );
  }

}

export default WithHeader(TodaySteps, 'Today\'s steps');
