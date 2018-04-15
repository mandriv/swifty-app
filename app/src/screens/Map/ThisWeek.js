import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Map from '.';
import WithHeader from '../../shared/HoC/WithHeader';

class MapThisWeek extends React.PureComponent {

  static navigationOptions = {
    title: 'This Week',
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

export default WithHeader(MapThisWeek, 'Map - this week');
