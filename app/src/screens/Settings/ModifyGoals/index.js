import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import EnhacedModifyGoalsForm from './ModifyGoalsForm/EnhacedModifyGoalsForm';
import * as GoalsRedux from '../../../redux/Goals.redux';
import DefaultBackground from '../../../shared/DefaultBackground';
import WithHeader from '../../../shared/HoC/WithHeader';

class ModifyGoals extends Component {

  handleSubmit = (goals) => {
    this.props.updateGoals(goals);
    this.props.navigation.navigate('MainSettings');
  };

  render() {
    return (
      <DefaultBackground>
        <EnhacedModifyGoalsForm
          initialValues={this.props.goals}
          onSubmit={this.handleSubmit}
        />
      </DefaultBackground>
    );
  }

}

ModifyGoals.propTypes = {
  goals: PropTypes.object.isRequired, // eslint-disable-line
  updateGoals: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  goals: state.goals,
});

const mapDispatchToProps = (dispatch) => {
  const { updateGoals } = GoalsRedux.Creators;
  return {
    updateGoals: goals => dispatch(updateGoals(goals)),
  };
};

const withNav = withNavigation(ModifyGoals);
const withConnect = connect(mapStateToProps, mapDispatchToProps)(withNav);
export default WithHeader(withConnect, 'Modify your goals');
