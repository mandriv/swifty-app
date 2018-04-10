import { StyleSheet } from 'react-native';
import { white, black, blackLight, rgba } from '../../../config/colours';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    alignItems: 'center',
  },
  inputContainer: {
    flex: 0,
    marginVertical: 12,
  },
  label: {
    textAlign: 'left',
    fontSize: 10,
    color: black,
  },
  input: {
    width: 250,
    height: 45,
    padding: 10,
    borderColor: blackLight,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    flex: 0,
    width: '60%',
    height: 45,
    marginTop: 20,
  },
});

export default styles;
