import { StyleSheet } from 'react-native';
import { primaryLight } from '../../../config/colours';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    height: 45,
    backgroundColor: primaryLight,
    paddingVertical: 10,
    borderRadius: 5,
    width: 230,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  button: {
    height: 45,
    width: '80%',
  },
});

export default styles;
