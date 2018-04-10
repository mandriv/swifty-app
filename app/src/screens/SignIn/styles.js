import { StyleSheet } from 'react-native';
import { white, primaryLight, secondaryLight } from '../../config/colours';
import { primary } from '../../config/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    position: 'relative',
    backgroundColor: white,
  },
  shape: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
  },
  topShape: {
    top: 0,
    left: 0,
    borderRightWidth: 460,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: primaryLight,
  },
  bottomShape: {
    borderLeftWidth: 250,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: primaryLight,
    bottom: 0,
    right: 0,
  },
  keyboardAvoidingView: {
    flex: 2,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: '10%',
    textAlign: 'center',
    fontFamily: primary('Bold'),
    fontSize: 36,
  },
  social: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
  },
  circleLeft: {
    marginRight: 50,
  },
  button: {
    textAlign: 'center',
    color: white,
    fontSize: 60,
    paddingBottom: 10,
    paddingTop: 0,
    fontWeight: 'bold',
  },
});

export default styles;
