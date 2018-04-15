import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Yup from 'yup';

import ModifyGoalsForm from '.';

/*
  Formik handler
*/

export default class EnhacedModifyGoalsForm extends Component {

  render() {
    const { initialValues } = this.props;
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={() =>
          Yup.object().shape({
            steps: Yup
              .number()
              .min(100, 'Minimal goal is 100 steps a day')
              .integer()
              .required('Please enter new steps goal'),
            calories: Yup
              .number()
              .min(20, 'Minimal goal is 20 calories a day')
              .integer()
              .required('Please enter new calories goal'),
            distance: Yup
              .number()
              .min(200, 'Minimal goal is 200 m a day')
              .integer()
              .required('Please enter new distance goal'),
            avarage_speed: Yup
              .number()
              .min(0.5, 'Minimal goal is 0.5 m/s a day')
              .required('Please enter new steps goal'),
          })
        }
        onSubmit={this.props.onSubmit}
        render={({ ...formikProps }) => (
          <ModifyGoalsForm
            {...formikProps}
          />
        )}
      />
    );
  }

}

EnhacedModifyGoalsForm.propTypes = {
  initialValues: PropTypes.shape({
    steps: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
    avarage_speed: PropTypes.number.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
