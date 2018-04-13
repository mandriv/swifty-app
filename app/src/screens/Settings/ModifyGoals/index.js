import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

export default class ModifyGoals extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>ModifyGoals screen</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

ModifyGoals.propTypes = {

};
