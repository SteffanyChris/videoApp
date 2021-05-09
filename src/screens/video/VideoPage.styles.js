import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';
import {screenHeight, screenWidth} from '../../utils/screenUtils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  video: {
    width: screenHeight,
    height: screenWidth,
  },
  videoContainer: {
    flex: 1,
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.overlay,
    justifyContent: 'space-evenly',
  },
});
