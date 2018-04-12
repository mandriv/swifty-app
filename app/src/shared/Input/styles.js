import { StyleSheet } from 'react-native';
import { blackLight, white, rgba } from '../../config/colours';
import { secondary } from '../../config/fonts';

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
  },
  label: {
    fontFamily: secondary(),
    color: blackLight,
    fontSize: 12,
  },
  inputAndIcon: {
    flexDirection: 'row',
    height: 45,
    backgroundColor: rgba(white, 0.7),
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
  input: {
    marginHorizontal: 10,
    fontFamily: secondary(),
    width: '100%',
  },
  errorMsg: {
    color: 'red',
    fontFamily: secondary(),
  }
});

export default styles;
