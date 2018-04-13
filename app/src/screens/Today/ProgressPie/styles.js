import { StyleSheet } from 'react-native';
import { white, offWhite } from '../../../config/colours';
import { primary } from '../../../config/fonts';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  progressPie: {
    width: 150,
    height: 150,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTop: {
    fontFamily: primary(),
    fontSize: 12,
    textAlign: 'center',
    color: offWhite,
  },
  textBottom: {
    fontFamily: primary(),
    fontSize: 24,
    textAlign: 'center',
    color: white,
  },
});

export default styles;
