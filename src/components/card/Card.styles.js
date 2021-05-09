import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../utils/colors';
import {screenWidth} from '../../utils/screenUtils';

const screenMargin = 16;
const cardMargin = 4;
export const cardSize = (screenWidth - 2 * screenMargin) / 3 - 3 * cardMargin;

export default StyleSheet.create({
  container: {
    height: hp('40%'),
    shadowColor: colors.black,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  title: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    fontSize: 26,
    color: colors.white,
    fontWeight: 'bold',
  },
  description: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 55,
    fontSize: 16,
    color: colors.white,
  },
  verticalCardContainer: {
    height: hp('25%'),
    width: cardSize,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  verticalCardImage: {
    flex: 0.7,
    resizeMode: 'cover',
  },
  verticalCardTextContainer: {
    flex: 0.3,
    margin: 8,
  },
  categoryText: {
    fontSize: 14,
    color: colors.darkGray,
  },
  horizontalContainer: {
    flexDirection: 'row',
    marginTop: 16,
    height: hp('15%'),
    backgroundColor: colors.white,
  },
  horizontalImage: {
    flex: 0.3,
  },
  horizontalTextContainer: {
    flex: 0.7,
    margin: 8,
    justifyContent: 'space-between',
  },
  horizontalTitle: {
    fontSize: 16,
  },
  horizontalDescription: {
    fontSize: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
