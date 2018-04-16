import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { secondaryLight } from '../../../config/colours';

export default class MapCallout extends Component {

  render() {
    const { loc } = this.props;
    return (
      <View style={styles.marker}>
        <Text>{JSON.stringify(loc)}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  marker: {
    flex: 1,
    backgroundColor: secondaryLight,
  },
});

MapCallout.propTypes = {
  loc: PropTypes.object.isRequired, // eslint-disable-line
};
