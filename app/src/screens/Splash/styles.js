import { StyleSheet } from 'react-native';
import { white, offWhite } from '../../config/colours';
import { primary, secondary } from '../../config/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  centerize: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: '5%',
  },
  title: {
    fontFamily: primary('Bold'),
    fontSize: 36,
    textAlign: 'center',
    color: white,
  },
  subTitle: {
    fontFamily: primary(),
    fontSize: 18,
    textAlign: 'center',
    color: offWhite,
  },
  loadingText: {
    fontFamily: secondary(),
    fontSize: 12,
    textAlign: 'center',
    color: offWhite,
    marginTop: '5%',
  },
});
