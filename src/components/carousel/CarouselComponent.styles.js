import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../utils/colors';

export default StyleSheet.create({
  header: {
    color: colors.darkGray,
    fontSize: 28,
    fontWeight: 'bold',
    height: hp('10%'),
    textAlignVertical: 'center',
  },
  carouselContainer: {
    flexDirection: 'row',
  },
});
