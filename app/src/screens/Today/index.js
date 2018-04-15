import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';
import Display from 'react-native-display';

import { init } from '../../config/GeolocationTracking';
import DefaultBackground from '../../shared/DefaultBackground';
import ProgressPie from './ProgressPie';
import Stats from './Stats';
import styles from './styles';
import sync from '../../services/sync';
import * as FitnessData from '../../services/fitnessData';
import { white } from '../../config/colours';

class Today extends React.PureComponent {

  state = {
    today: {},
    yesterday: {},
    percentile: {
      steps: 0,
      calories: 0,
      distance: 0,
      avarage_speed: 0,
    },
    loading: true,
  };

  componentDidMount() {
    // first screen after login, start tracking
    init();
    sync(true);
    this.getData();
  }

  getData = async () => {
    const { user, token } = this.props;
    try {
      const response = await FitnessData.getTodayStats(user.id, token);
      const today = response.data.stats;
      const response2 = await FitnessData.getYesterdayStats(user.id, token);
      const yesterday = response2.data.stats;
      const response3 = await FitnessData.getTodaysPercentile(user.id, token);
      this.setState({
        today,
        yesterday,
        percentile: {
          steps: response3.data.steps_percentile,
          calories: response3.data.calories_percentile,
          distance: response3.data.distance_percentile,
          avarage_speed: response3.data.avarage_speed_percentile,
        },
        loading: false,
      });
    } catch (err) {
      console.log('err:'); // eslint-disable-line
      console.log(err); // eslint-disable-line
      console.log(err.response); // eslint-disable-line
    }
  }

  render() {
    const { current, unit, goals } = this.props;
    const {
      today,
      yesterday,
      percentile,
      loading,
    } = this.state;
    return (
      <View style={styles.container}>
        <DefaultBackground>
          <Display enable={loading} style={styles.centerContainer}>
            <Spinner size={100} type="WanderingCubes" color={white} />
          </Display>
          <Display enable={!loading} style={styles.container}>
            <View style={styles.centerContainer}>
              <ProgressPie
                current={current}
                data={today}
                goals={goals}
              />
            </View>
            <View style={[styles.container]}>
              <Stats
                unit={unit}
                diff={Math.round(Number(today[current]) - Number(yesterday[current]), 2)}
                centile={percentile[current]}
                goal={goals[current]}
              />
            </View>
          </Display>
        </DefaultBackground>
      </View>
    );
  }

}

Today.propTypes = {
  current: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  goals: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  token: state.token,
  user: state.user,
  goals: state.goals,
});

export default connect(mapStateToProps)(Today);
