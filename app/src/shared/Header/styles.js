import { StyleSheet } from 'react-native';
import { primaryLight, white } from '../../config/colours';
import { primary } from '../../config/fonts';

const styles = StyleSheet.create({
  header: {
    flex: 0,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 30,
    backgroundColor: primaryLight,
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: white,
    fontFamily: primary('Bold'),
    fontSize: 18,
  },
});

export default styles;
