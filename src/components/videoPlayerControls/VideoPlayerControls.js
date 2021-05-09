import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../../utils/colors';
import styles from './VideoPlayerControls.styles';
import Screen from '../../screens/screen/Screen';

const PlayerControls = ({
  playing,
  onPlay,
  onPause,
  skipForwards,
  skipBackwards,
  onNext,
  onPrevious,
}) => (
  <Screen noPadding>
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
        <Icon name="replay-10" type="material" color={colors.white} size={50} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={playing ? onPause : onPlay}>
        {playing ? (
          <Icon name="pause" type="material" color={colors.white} size={60} />
        ) : (
          <Icon
            name="play-arrow"
            type="material"
            color={colors.white}
            size={60}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
        <Icon
          name="forward-10"
          type="material"
          color={colors.white}
          size={50}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.forwardAndBackWrapper}>
      <TouchableOpacity style={[styles.touchable]} onPress={onPrevious}>
        <Icon
          name="skip-previous"
          type="material"
          color={colors.white}
          size={50}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.touchable]} onPress={onNext}>
        <Icon name="skip-next" type="material" color={colors.white} size={50} />
      </TouchableOpacity>
    </View>
  </Screen>
);

export default PlayerControls;
