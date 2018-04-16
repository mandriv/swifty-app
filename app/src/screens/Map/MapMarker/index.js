import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { secondaryLight } from '../../../config/colours';

export default class MapMarker extends Component {

  render() {
    return (
      <View style={styles.marker} />
    );
  }

}

const styles = StyleSheet.create({
  marker: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: secondaryLight,
  },
});
