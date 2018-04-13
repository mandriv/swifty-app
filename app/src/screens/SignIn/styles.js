import { StyleSheet } from 'react-native';
import { white, primaryLight, secondaryLight, blackLight } from '../../config/colours';
import { primary } from '../../config/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  signIn: {
    fontFamily: primary('Bold'),
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
    color: blackLight,
  },
  shape: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 460,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: primaryLight,

  },
  shape2: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 380,
    borderBottomWidth: 80,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: primaryLight,
    flex: 1,
    bottom: 0,
    right: 0,
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 100 / 2,
    backgroundColor: secondaryLight,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  social: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 90,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleLeft: {
    marginRight: 50,
  },


});

export default styles;
