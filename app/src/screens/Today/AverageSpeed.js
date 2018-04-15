import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Today from '.';
import WithHeader from '../../shared/HoC/WithHeader';

class TodayAverageSpeed extends React.PureComponent {

  static navigationOptions = {
    title: 'Average Speed',
    tabBarIcon: ({ tintColor }) => (<Icon name="speedometer" size={25} color={tintColor} />),
  };

  render() {
    return (
      <Today
        current="avarage_speed"
        unit="m/s"
      />
    );
  }

}

export default WithHeader(TodayAverageSpeed, 'Today\'s average speed');
