import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Map from '.';
import WithHeader from '../../shared/HoC/WithHeader';

class MapThisMonth extends React.PureComponent {

  static navigationOptions = {
    title: 'This Month',
    tabBarIcon: ({ tintColor }) => (<Icon name="md-walk" size={25} color={tintColor} />),
  };

  render() {
    const data = [];
    return (
      <Map
        data={data}
      />
    );
  }

}

export default WithHeader(MapThisMonth, 'Map - this month');
