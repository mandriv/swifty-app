import { StyleSheet } from 'react-native';

import { white, offWhite, rgba } from '../../../../config/colours';
import { secondary } from '../../../../config/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    marginTop: 40,
    flex: 0,
    width: 250,
    height: 45,
  },
});

export default styles;
