import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../utils/colors';

export default StyleSheet.create({
  flatList: {
    margin: 16,
  },
  inputContainer: {
    height: 60,
    paddingStart: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    color: colors.darkGray,
    flex: 1,
    height: 60,
  },
  clearButton: {
    justifyContent: 'center',
    width: 60,
    height: 60,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 26,
  },
});
