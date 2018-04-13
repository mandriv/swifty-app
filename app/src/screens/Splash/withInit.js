import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { init } from '../../config/HealthData';
import { auth } from '../../services/auth';

/*
  Redirect to auth / app HoC
*/

const withRedirect = (WrappedComponent) => {
  class WithRedirectComponent extends React.PureComponent {

    componentDidMount() {
      const { token, navigation } = this.props;
      init(); // init health data
      if (token) {
        /*
        auth()
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });

        */
        navigation.navigate('App');
        return;
      }
      navigation.navigate('Auth');
    }

    render() {
      return (
        <WrappedComponent />
      );
    }

  }

  WithRedirectComponent.propTypes = {
    token: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired, // eslint-disable-line
  };

  const mapStateToProps = state => ({ token: state.token });

  return connect(mapStateToProps)(WithRedirectComponent);
};

export default withRedirect;
