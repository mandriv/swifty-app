import { StyleSheet } from 'react-native';

import { primaryLight, white, offWhite, rgba } from '../../../config/colours';
import { secondary } from '../../../config/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    backgroundColor: rgba(white, 0.1),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: rgba(offWhite, 0.1),
    width: '100%',
    marginBottom: 14,
  },
  text: {
    paddingLeft: 15,
    color: white,
    fontSize: 13,
    fontFamily: secondary(),
  },
});

export default styles;
