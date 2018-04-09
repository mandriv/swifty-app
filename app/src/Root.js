import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Splash from './screens/Splash';

import { store, persistor } from './redux/store';
import { RootNavigator } from './config/router';

/*
  Root container
*/

export default class Root extends React.PureComponent {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Splash />} persistor={persistor}>
          <View style={styles.container}>
            <StatusBar
              barStyle="light-content"
            />
            <RootNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
