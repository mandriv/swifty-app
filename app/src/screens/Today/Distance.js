import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Today from '.';
import WithHeader from '../../shared/HoC/WithHeader';


class TodayDistance extends React.PureComponent {

  static navigationOptions = {
    title: 'Distance',
    tabBarIcon: ({ tintColor }) => (<Icon name="road" size={25} color={tintColor} />),
  };

  render() {
    return (
      <Today
        current="distance"
        unit="m"
      />
    );
  }

}

export default WithHeader(TodayDistance, 'Today\'s distance');
