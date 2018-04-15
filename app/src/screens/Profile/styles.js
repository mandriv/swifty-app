import { StyleSheet } from 'react-native';

import { white, secondaryLight, gray } from '../../config/colours';
import { primary, secondary } from '../../config/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  username: {
    marginTop: '10%',
    textAlign: 'center',
    fontFamily: primary('Bold'),
    fontSize: 20,
    color: white,
  },
  rank: {
    textAlign: 'center',
    fontFamily: primary('Bold'),
    fontSize: 16,
    color: secondaryLight,
  },
  row: {
    flexDirection: 'row',
  },
  stats: {
    marginTop: '10%',
  },
  centerize: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    textAlign: 'center',
    fontFamily: secondary('Bold'),
    fontSize: 14,
    color: gray,
  },
  result: {
    paddingTop: '5%',
    textAlign: 'center',
    fontFamily: secondary(),
    fontSize: 14,
    color: white,
  },
  loadingContainer: {
    paddingTop: 20,
  },
});



export default styles;
