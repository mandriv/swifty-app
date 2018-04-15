import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';

import { secondary, secondaryLight } from '../../../config/colours';
import styles from './styles';

export default class Stats extends React.PureComponent {

  render() {
    const {
      diff,
      centile,
      goal,
      unit
    } = this.props;
    return (
      <View style={[styles.root]}>
        <View style={styles.flex}>
          <View style={[styles.row, styles.flex]} />
          <View style={[styles.row, styles.flex]}>
            <Text style={styles.emphasis}>
              {`${diff >= 0 ? '+' : ''}${diff} ${unit}  `}
            </Text>
            { diff > 0 &&
              <Icon name="arrow-up" size={14} color={secondaryLight} />
            }
            { diff < 0 &&
              <Icon name="arrow-down" size={14} color={secondary} />
            }
          </View>
          <View style={[styles.row, styles.flex]}>
            <Text style={styles.muted}>from yesterday</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={[styles.row, styles.flex]}>
            <Text style={styles.muted}>Better than</Text>
          </View>
          <View style={[styles.row, styles.flex]}>
            <Text style={styles.bold}>{`${centile}%`}</Text>
          </View>
          <View style={[styles.row, styles.flex]}>
            <Text style={styles.muted}>{'of today\'s active users'}</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={[styles.row, styles.flex]} />
          <View style={[styles.row, styles.flex]}>
            <Text style={styles.textWhite}>{`${goal} ${unit}`}</Text>
          </View>
          <View style={[styles.row, styles.flex]}>
            <Text style={styles.muted}>{'today\'s goal'}</Text>
          </View>
        </View>
      </View>
    );
  }

}

Stats.propTypes = {
  diff: PropTypes.number.isRequired,
  centile: PropTypes.number.isRequired,
  goal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string.isRequired,
};
