import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  slider: {
    flex: 1,
  },
  timeLeft: {
    fontSize: 16,
    color: colors.white,
    paddingHorizontal: 10,
  },
  timeRight: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'right',
    paddingHorizontal: 10,
  },
});
