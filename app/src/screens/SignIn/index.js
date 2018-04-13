import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';

import { white } from '../../config/colours';
import styles from './styles';
import EnhacedLoginForm from './LoginForm/EnhacedLoginForm';
import { login } from '../../services/auth';
import * as TokenRedux from '../../redux/Token.redux';
import * as UserRedux from '../../redux/User.redux';

class SignIn extends React.Component {

  state = {
    loading: false,
  };

  handleSubmit = async (values) => {
    this.setState({ loading: true });
    try {
      const response = await login(values);
      console.log(response);
      this.props.receiveToken(response.data.access_token);
      this.props.receiveUser(response.data.user);
      this.props.navigation.navigate('App');
    } catch (err) {
      console.log(err);
      console.log(err.response); // eslint-disable-line
      if (err.response && (err.response.status === 404 || err.response.status === 500)) {
        Toast.show('Lost connection to the server');
        this.setState({ loading: false });
        return;
      }
      if (err.response && err.response.data && err.response.data.msg) {
        Toast.show(err.response.data.msg);
      }
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shape} />
        <View style={styles.adjusted}>
          <Text style={styles.signIn}>Sign In</Text>
          <View />
          <View style={styles.formContainer}>
            <EnhacedLoginForm
              onSubmit={this.handleSubmit}
              loading={this.state.loading}
            />
          </View>
          <View style={styles.social}>
            <TouchableOpacity style={[styles.circle, styles.circleLeft]} >
              <Icon style={styles.button} name="facebook" size={40} color={white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle} >
              <Icon style={styles.button} name="google" size={40} color={white} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.shape2} />
      </View>
    );
  }

}

SignIn.propTypes = {
  navigation: PropTypes.object.isRequired, // eslint-disable-line
  receiveToken: PropTypes.func.isRequired,
  receiveUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  const { receiveToken } = TokenRedux.Creators;
  const { receiveUser } = UserRedux.Creators;
  return {
    receiveToken: token => dispatch(receiveToken(token)),
    receiveUser: user => dispatch(receiveUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
