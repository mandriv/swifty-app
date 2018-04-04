import React from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View, StyleSheet } from 'react-native';

import { RootNavigator } from './config/router';

/*
  Root container
*/

export default class Root extends React.PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <RootNavigator />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
