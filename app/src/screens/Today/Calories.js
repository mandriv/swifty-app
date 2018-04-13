import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import WithHeader from '../../shared/HoC/WithHeader';

class TodayCalories extends React.PureComponent {

  static navigationOptions = {
    title: 'Calories',
    tabBarIcon: ({ tintColor }) => (<Icon name="fire" size={25} color={tintColor} />),
  };

  render() {
    return (
      <View>
        <Text>Today Calories</Text>
      </View>
    );
  }

}

export default WithHeader(TodayCalories, 'Today');
