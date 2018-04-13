import React from 'react';
import PropTypes from 'prop-types';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

import * as TokenRedux from '../../../redux/Token.redux';
import * as UserRedux from '../../../redux/User.redux';
import DefaultBackground from '../../../shared/DefaultBackground';
import WithHeader from '../../../shared/HoC/WithHeader';
import styles from './styles';


class MainSettings extends React.Component {

  goToModifyGoals = () => this.props.navigation.navigate('ModifyGoals');

  logout = () => {
    this.props.resetToken();
    this.props.resetUser();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <DefaultBackground>
        <ScrollView style={styles.container}>
          <TouchableOpacity style={styles.buttonContainer} onPress={this.goToModifyGoals}>
            <Text style={styles.text}>Modify Goals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={this.logout}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </DefaultBackground>
    );
  }

}

MainSettings.propTypes = {
  navigation: PropTypes.object.isRequired, // eslint-disable-line
  resetUser: PropTypes.func.isRequired,
  resetToken: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  const { resetToken } = TokenRedux.Creators;
  const { resetUser } = UserRedux.Creators;
  return {
    resetToken: () => dispatch(resetToken()),
    resetUser: () => dispatch(resetUser()),
  };
};

const withNav = withNavigation(MainSettings);
const withConnect = connect(null, mapDispatchToProps)(withNav);
export default WithHeader(withConnect, 'Settings');
