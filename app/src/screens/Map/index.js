import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import DefaultBackground from '../../shared/DefaultBackground';
import styles from './styles';

class Map extends React.PureComponent {

  render() {
    return (
      <DefaultBackground>
        <View style={styles.container}>
          <Text>Map</Text>
        </View>
      </DefaultBackground>
    );
  }

}

Map.propTypes = {
  data: PropTypes.array.isRequired, // eslint-disable-line
}

export default Map;
