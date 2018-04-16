import { StyleSheet } from 'react-native';
import { rgba, white, gray, offWhite, secondaryLight } from '../../../config/colours';
import { primary, secondary } from '../../../config/fonts';

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: rgba(white, 0.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankContainer: {
    flex: 1,
  },
  rank: {
    fontFamily: primary(),
    color: gray,
  },
  userContainer: {
    flex: 3,
  },
  user: {
    fontFamily: secondary('Bold'),
    color: white,
  },
  you: {
    color: secondaryLight,
  },
  valueContainer: {
    flex: 2,
    alignItems: 'flex-end',
  },
  value: {
    fontFamily: primary(),
    color: offWhite,
  }
});

export default styles;
