import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Map from '.';
import WithHeader from '../../shared/HoC/WithHeader';
import { getAllLocations, getThisWeekLocations } from '../../config/GeolocationHelpers';

class MapThisWeek extends React.PureComponent {

  static navigationOptions = {
    title: 'This Week',
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
      this.setState({ data: getThisWeekLocations(data) });
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

export default WithHeader(MapThisWeek, 'Map - this week');
