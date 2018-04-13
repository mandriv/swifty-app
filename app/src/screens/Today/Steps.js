import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import WithHeader from '../../shared/HoC/WithHeader';
import DefaultBackground from '../../shared/DefaultBackground';
import ProgressPie from './ProgressPie';
import styles from './styles';

class TodaySteps extends React.PureComponent {

  static navigationOptions = {
    title: 'Steps',
    tabBarIcon: ({ tintColor }) => (<Icon name="md-walk" size={25} color={tintColor} />),
  };

  render() {
    return (
      <View style={styles.container}>
        <DefaultBackground>
          <View style={styles.progressPieContainer}>
            <ProgressPie />
          </View>
        </DefaultBackground>
      </View>
    );
  }

}

export default WithHeader(TodaySteps, 'Today\'s activity');
