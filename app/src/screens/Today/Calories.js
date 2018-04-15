import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Today from '.';
import WithHeader from '../../shared/HoC/WithHeader';

class TodayCalories extends React.PureComponent {

  static navigationOptions = {
    title: 'Calories',
    tabBarIcon: ({ tintColor }) => (<Icon name="fire" size={25} color={tintColor} />),
  };

  render() {
    return (
      <Today
        current="calories"
        unit="kcal"
      />
    );
  }

}

export default WithHeader(TodayCalories, 'Today\'s calories');
