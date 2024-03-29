import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 0.7,
  },
  textContainer: {
    backgroundColor: 'white',
    flex: 0.3,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  icon: {
    position: 'absolute',
    bottom: hp('29%'),
    right: 30,
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});
