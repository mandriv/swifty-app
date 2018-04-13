import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import WithHeader from '../../shared/HoC/WithHeader';


class TodayDistance extends React.PureComponent {

  static navigationOptions = {
    title: 'Distance',
    tabBarIcon: ({ tintColor }) => (<Icon name="road" size={25} color={tintColor} />),
  };

  render() {
    return (
      <View>
        <Text>Today Distance</Text>
      </View>
    );
  }

}

export default WithHeader(TodayDistance, 'Today');
