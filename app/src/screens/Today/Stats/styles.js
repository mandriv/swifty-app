import { StyleSheet } from 'react-native';
import { white, offWhite, secondaryLight } from '../../../config/colours';
import { secondary } from '../../../config/fonts';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    height: 65,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
  emphasis: {
    fontFamily: secondary(),
    color: secondaryLight,
    fontSize: 14,
    textAlign: 'center',
  },
  muted: {
    fontFamily: secondary(),
    color: offWhite,
    fontSize: 12,
    textAlign: 'center',
    height: '200%',
  },
  bold: {
    fontFamily: secondary('Bold'),
    color: white,
    fontSize: 14,
    textAlign: 'center',
  },
  textWhite: {
    fontFamily: secondary(),
    color: white,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
