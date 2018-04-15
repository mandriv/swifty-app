import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Map from '.';
import WithHeader from '../../shared/HoC/WithHeader';

class MapAnytime extends React.PureComponent {

  static navigationOptions = {
    title: 'Anytime',
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

export default WithHeader(MapAnytime, 'Map - anytime');
