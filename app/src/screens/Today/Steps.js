import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import WithHeader from '../../shared/HoC/WithHeader';
import DefaultBackground from '../../shared/DefaultBackground';
import ProgressPie from './ProgressPie';
import Stats from './Stats';
import styles from './styles';
import sync from '../../services/sync';

const data = {
  current: 'steps',
  steps: 7521,
  distance: 1.2,
  calories: 530,
  averageSpeed: 8.3,
};

const goals = {
  steps: 10000,
  distance: 2,
  calories: 1000,
  averageSpeed: 5,
};

class TodaySteps extends React.PureComponent {

  static navigationOptions = {
    title: 'Steps',
    tabBarIcon: ({ tintColor }) => (<Icon name="md-walk" size={25} color={tintColor} />),
  };

  componentDidMount() {
    sync(2, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjM2MzgxNDYsIm5iZiI6MTUyMzYzODE0NiwianRpIjoiY2QwMmFhZTAtYjJkYy00YTllLTkwZmItZjNlZTQ5NjI0ZWNiIiwiZXhwIjoxNTIzNjM5MDQ2LCJpZGVudGl0eSI6MiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.ubUlqYKBczkpFI-2ynTNpHcXMWRJ-JZkiWispIKZ7DM');
  }

  render() {
    return (
      <View style={styles.container}>
        <DefaultBackground>
          <View style={styles.centerContainer}>
            <ProgressPie data={data} goals={goals} />
          </View>
          <View style={[styles.container]}>
            <Stats
              unit="steps"
              diff={31}
              centile={84}
              goal={10000}
            />
          </View>
        </DefaultBackground>
      </View>
    );
  }

}

export default WithHeader(TodaySteps, 'Today\'s activity');
