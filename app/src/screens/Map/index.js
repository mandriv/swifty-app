import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import DefaultBackground from '../../shared/DefaultBackground';
import MapStyle from '../../config/MapStyle.json';
import styles from './styles';

class Map extends React.PureComponent {

  state = {
    currentRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  onRegionChange = region => this.setState({ currentRegion: region });

  render() {
    const { currentRegion } = this.state;
    return (
      <DefaultBackground>
        <View style={styles.container}>
          <MapView
            initialRegion={currentRegion}
            onRegionChange={this.onRegionChange}
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle}
          />
        </View>
      </DefaultBackground>
    );
  }

}

Map.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line
}

export default Map;
