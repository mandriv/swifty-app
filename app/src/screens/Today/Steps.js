import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

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
          <Text>Haha!</Text>
        </DefaultBackground>
      </View>
    );
  }

}

export default WithHeader(TodaySteps, 'Today');
