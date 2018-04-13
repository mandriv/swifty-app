import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Yup from 'yup';

import RegisterForm from '.';

/*
  Formik handler
*/

export default class EnhacedRegisterForm extends Component {

  render() {
    return (
      <Formik
        initialvalues={{
          username: '',
          password: '',
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
            email: Yup
              .string()
              .required('Please enter your email')
              .email('Invalid email address'),
          })
        }
        onSubmit={this.props.onSubmit}
        render={({ ...formikProps }) => <RegisterForm {...formikProps} />}
      />
    );
  }

}

EnhacedRegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
