import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import WithHeader from '../../shared/HoC/WithHeader';


class TodaySteps extends React.PureComponent {

  static navigationOptions = {
    title: 'Steps',
    tabBarIcon: ({ tintColor }) => (<Icon name="md-walk" size={25} color={tintColor} />),
  };

  render() {
    return (
      <View>
        <Text>Today steps</Text>
      </View>
    );
  }

}

export default WithHeader(TodaySteps, 'Today');
