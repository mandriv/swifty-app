import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Map from '.';
import WithHeader from '../../shared/HoC/WithHeader';

class MapToday extends React.PureComponent {

  static navigationOptions = {
    title: 'Map - today',
    tabBarLabel: 'Today',
    drawerLabel: 'Map',
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

export default WithHeader(MapToday, 'Map - today');
