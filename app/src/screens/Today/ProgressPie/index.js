import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';

import { primaryLight, secondaryLight } from '../../../config/colours';
import styles from './styles';

export default class ProgressPie extends React.PureComponent {

  getLabel = () => {
    switch (this.props.current) {
      case 'steps':
      case 'distance':
      case 'calories':
        return this.props.current;
      case 'average_speed':
        return 'average speed';
      default:
        return '';
    }
  }

  render() {
    const { data, goals, current } = this.props;
    const goal = goals[current];
    const progress = data[current] / goal;
    return (
      <View style={styles.container}>
        <ProgressCircle
          style={styles.progressPie}
          progress={progress}
          progressColor={secondaryLight}
          backgroundColor={primaryLight}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textTop}>
            {`today ${this.getLabel()}`}
          </Text>
          <Text style={styles.textBottom}>
            {data[current]}
          </Text>
        </View>
      </View>
    );
  }

}

ProgressPie.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line
  goals: PropTypes.object.isRequired, // eslint-disable-line
  current: PropTypes.string.isRequired,
};

ProgressPie.defaultProps = {

};
