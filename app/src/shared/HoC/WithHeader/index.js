import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Header from '../../Header';

/*
  Redirect to auth / app HoC
*/

const WithHeader = (WrappedComponent, title) => {
  class WithHeaderComponent extends React.PureComponent {

    static navigationOptions = { ...WrappedComponent.navigationOptions };

    render() {
      return (
        <View style={{ flex: 1 }}>
          <Header title={title} />
          <WrappedComponent />
        </View>
      );
    }

  }
  return WithHeaderComponent;
};

export default WithHeader;
