import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Display from 'react-native-display';
import Spinner from 'react-native-spinkit';

import { getLeaderboard } from '../../services/fitnessData';
import DefaultBackground from '../../shared/DefaultBackground';
import WithHeader from '../../shared/HoC/WithHeader';
import { offWhite } from '../../config/colours';
import styles from './styles';

class Profile extends React.Component {

  state = {
    loading: true,
    steps: undefined,
    distance: undefined,
    calories: undefined,
    rank: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { token, username } = this.props;
    try {
      const response = await getLeaderboard(token);
      const { leaderboard } = response.data;

      const rank = leaderboard.steps.findIndex(row => row.username === username);
      const { steps, distance, calories } = leaderboard.steps[rank];
      this.setState({
        loading: false,
        steps,
        distance: Math.round(distance, 2),
        calories: Math.round(calories),
        rank: rank + 1,
      });
    } catch (err) {
      console.log(err.response); // eslint-disable-line
      console.log(err); // eslint-disable-line
    }
  };

  render() {
    const { rank } = this.state;
    return (
      <DefaultBackground>
        <View style={styles.container}>
          <Text style={styles.username}>{this.props.username}</Text>
          <Display enable={!this.state.loading} enter="fadeIn">
            <Text style={styles.rank}>{`#${rank} in global steps ranking`}</Text>
          </Display>
          <View style={[styles.row, styles.stats]}>
            <View style={[styles.container, styles.centerize]}>
              <Text style={styles.category}>STEPS</Text>
              <Display enable={this.state.loading} style={styles.loadingContainer}>
                <Spinner
                  size={20}
                  type="WanderingCubes"
                  color={offWhite}
                />
              </Display>
              <Display enable={!this.state.loading}>
                <Text style={styles.result}>
                  {this.state.steps}
                </Text>
              </Display>
            </View>
            <View style={[styles.container, styles.centerize]}>
              <Text style={styles.category}>DISTANCE</Text>
              <Display enable={this.state.loading} style={styles.loadingContainer}>
                <Spinner
                  size={20}
                  type="WanderingCubes"
                  color={offWhite}
                />
              </Display>
              <Display enable={!this.state.loading}>
                <Text style={styles.result}>
                  {`${this.state.distance} m`}
                </Text>
              </Display>
            </View>
            <View style={[styles.container, styles.centerize]}>
              <Text style={styles.category}>CALORIES</Text>
              <Display enable={this.state.loading} style={styles.loadingContainer}>
                <Spinner
                  size={20}
                  type="WanderingCubes"
                  color={offWhite}
                />
              </Display>
              <Display enable={!this.state.loading}>
                <Text style={styles.result}>
                  {`${this.state.calories} kcal`}
                </Text>
              </Display>
            </View>
          </View>
        </View>
      </DefaultBackground>
    );
  }

}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  token: state.token,
  user: state.user,
  username: state.user.username,
});

export default WithHeader(connect(mapStateToProps)(Profile), 'Your profile');
