import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';

import UserItem from './UserItem';
import { getLeaderboard } from '../../services/fitnessData';
import DefaultBackground from '../../shared/DefaultBackground';
import { secondaryLight, white } from '../../config/colours';
import styles from './styles';

class Leaderboard extends React.PureComponent {

  state = {
    loading: true,
    data: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true });
    const { token, type } = this.props;
    try {
      const response = await getLeaderboard(token);
      const { leaderboard } = response.data;
      this.setState({
        data: leaderboard[type],
        loading: false,
      });
    } catch (err) {
      console.log(err.response); // eslint-disable-line
      console.log(err); // eslint-disable-line
    }
  };

  render() {
    const { data, loading } = this.state;
    const { type, username } = this.props;
    return (
      <DefaultBackground>
        <FlatList
          style={styles.list}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={this.fetchData}
              colors={[secondaryLight, white]}
              tintColor={secondaryLight}
            />
          }
          data={data}
          renderItem={({ item, index }) => (
            <UserItem
              user={item}
              type={type}
              rank={index + 1}
              you={username}
            />
          )}
          keyExtractor={item => item.username}
        />
      </DefaultBackground>
    );
  }

}

Leaderboard.propTypes = {
  type: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  token: state.token,
  username: state.user.username,
});

export default connect(mapStateToProps)(Leaderboard);
