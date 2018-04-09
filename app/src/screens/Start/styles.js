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
    paddingVertical: '10%',
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
  buttons: {
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: '4%',
  },
});
