import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Yup from 'yup';

import LoginForm from '.';

/*
  Formik handler
*/

export default class EnhacedLoginForm extends Component {

  render() {
    return (
      <Formik
        initialvalues={{
          username: '',
          email: '',
        }}
        validationSchema={() =>
          Yup.object().shape({
            username: Yup
              .string()
              .required('Please enter your username'),
            password: Yup
              .string()
              .required('Please enter your password'),
          })
        }
        onSubmit={this.props.onSubmit}
        render={({ ...formikProps }) => (
          <LoginForm
            loading={this.props.loading}
            {...formikProps}
          />
        )}
      />
    );
  }

}

EnhacedLoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
