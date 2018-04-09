import { StyleSheet } from 'react-native';
import { offWhite, secondary, black } from '../../config/colours';
import { primary } from '../../config/fonts';

export default StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  fluid: {
    flex: 1,
  },
  primary: {
    backgroundColor: secondary,
  },
  text: {
    fontFamily: primary(),
    fontSize: 20,
    textAlign: 'center',
  },
  textPrimary: {
    color: offWhite,
  },
});
