import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Map from '.';
import WithHeader from '../../shared/HoC/WithHeader';
import { getAllLocations, getThisMonthLocations } from '../../config/GeolocationHelpers';

class MapThisMonth extends React.PureComponent {

  static navigationOptions = {
    title: 'This Month',
    tabBarIcon: ({ tintColor }) => (<Icon name="md-walk" size={25} color={tintColor} />),
  };

  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await getAllLocations();
      this.setState({ data: getThisMonthLocations(data) });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <Map
        data={data}
      />
    );
  }

}

export default WithHeader(MapThisMonth, 'Map - this month');
