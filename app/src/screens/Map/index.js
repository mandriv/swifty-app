import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polyline } from 'react-native-maps';

import DefaultBackground from '../../shared/DefaultBackground';
import MapStyle from '../../config/MapStyle.json';
import MapMarker from './MapMarker';
import MapCallout from './MapCallout';
import { secondaryLight } from '../../config/colours';
import styles from './styles';

class Map extends React.PureComponent {

  renderMapItems = () => {
    const { data } = this.props;
    const markers = data.map(loc => (
      <Marker
        key={loc.id}
        coordinate={{ latitude: loc.lat, longitude: loc.long }}
      >
        <MapMarker />
        <Callout>
          <MapCallout loc={loc} />
        </Callout>
      </Marker>
    ));

    if (data.length > 1) {
      const coordinates = data.map(loc => ({
        latitude: loc.lat,
        longitude: loc.long,
      }));
      const line = (
        <Polyline
          coordinates={coordinates}
          strokeColor={secondaryLight}
          strokeWidth={4}
        />
      );
      return [...markers, line];
    }
    return markers;
  }

  render() {
    return (
      <DefaultBackground>
        <View style={styles.container}>
          <MapView
            style={StyleSheet.absoluteFillObject}
            provider={PROVIDER_GOOGLE}
            customMapStyle={MapStyle}
          >
            {this.renderMapItems()}
          </MapView>
        </View>
      </DefaultBackground>
    );
  }

}

Map.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line
};

export default Map;
