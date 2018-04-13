import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import WithHeader from '../../shared/HoC/WithHeader';


class TodayAverageSpeed extends React.PureComponent {

  static navigationOptions = {
    title: 'Average Speed',
    tabBarIcon: ({ tintColor }) => (<Icon name="speedometer" size={25} color={tintColor} />),
  };

  render() {
    return (
      <View>
        <Text>Today AverageSpeed</Text>
      </View>
    );
  }

}

export default WithHeader(TodayAverageSpeed, 'Today');
