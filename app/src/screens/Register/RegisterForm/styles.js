import { StyleSheet } from 'react-native';
import { black, blackLight, primaryLight, white, rgba } from '../../../config/colours';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    width: 220,
    height: 45,
    paddingLeft: 10,

  },
  label: {
    fontSize: 12,
    justifyContent: 'flex-start',
    color: blackLight,
    marginRight: 190,
  },
  mailLabel: {
    marginRight: 210,
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
  inputAndIcon: {
    flexDirection: 'row',
    height: 45,
    backgroundColor: rgba(white, 0.7),
    marginBottom: 20,
    width: 250,
    paddingLeft: 10,
    borderColor: rgba(blackLight, 0.7),
    borderWidth: 1,
    borderRadius: 5,
  },
  icon: {
    flex: 0,
    marginTop: 10,
  },

});

export default styles;
