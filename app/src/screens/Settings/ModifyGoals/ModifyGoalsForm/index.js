import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView,View } from 'react-native';

import styles from './styles';
import Button from '../../../../shared/Button';
import Input from '../../../../shared/Input';


export default class ModifyGoalsForm extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Input
            light
            label="Steps"
            keyboardType="numeric"
            onChangeText={(val) => {
              this.props.setFieldValue('steps', val);
              this.props.setFieldTouched('steps', true);
            }}
            value={this.props.values.steps.toString()}
            error={this.props.touched.steps && this.props.errors.steps}
            onSubmitEditing={() => this.caloriesInput.focus()}
          />
          <Input
            light
            inputRef={input => this.caloriesInput = input} // eslint-disable-line
            label="Calories [kcal]"
            keyboardType="numeric"
            onChangeText={(val) => {
              this.props.setFieldValue('calories', val);
              this.props.setFieldTouched('calories', true);
            }}
            value={this.props.values.calories.toString()}
            error={this.props.touched.calories && this.props.errors.calories}
            onSubmitEditing={() => this.distanceInput.focus()}
          />
          <Input
            light
            inputRef={input => this.distanceInput = input} // eslint-disable-line
            label="Distance [m]"
            keyboardType="numeric"
            onChangeText={(val) => {
              this.props.setFieldValue('distance', val);
              this.props.setFieldTouched('distance', true);
            }}
            value={this.props.values.distance.toString()}
            error={this.props.touched.distance && this.props.errors.distance}
            onSubmitEditing={() => this.speedInput.focus()}
          />
          <Input
            light
            inputRef={input => this.speedInput = input} // eslint-disable-line
            label="Average speed [m/s]"
            keyboardType="numeric"
            onChangeText={(val) => {
              this.props.setFieldValue('average_speed', val);
              this.props.setFieldTouched('average_speed', true);
            }}
            value={this.props.values.average_speed.toString()}
            error={this.props.touched.average_speed && this.props.errors.average_speed}
            onSubmitEditing={this.props.submitForm}
          />
          <View style={styles.button}>
            <Button
              type="secondary"
              fluid
              onPress={this.props.submitForm}
            >
              Modify
            </Button>
          </View>
        </View>
      </ScrollView>
    );
  }

}

ModifyGoalsForm.propTypes = {
  values: PropTypes.object.isRequired, // eslint-disable-line
  touched: PropTypes.object.isRequired, // eslint-disable-line
  errors: PropTypes.object.isRequired, // eslint-disable-line
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};
