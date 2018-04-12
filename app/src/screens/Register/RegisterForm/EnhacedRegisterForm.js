import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

/*
  Formik handler
*/

export default class EnhacedRegisterForm extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>EnhacedRegisterForm screen</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

EnhacedRegisterForm.propTypes = {

};
