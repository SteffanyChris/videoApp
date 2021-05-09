import React from 'react';
import {Text, ImageBackground, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import Screen from '../screen/Screen';
import styles from './MovieDetails.styles';
import {baseImageUri} from '../../utils/imageUtils';
import colors from '../../utils/colors';

function MovieDetails({route, navigation}) {
  const {movieDetails} = route.params;
  return (
    <Screen noPadding>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{uri: `${baseImageUri}${movieDetails.image}`}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{movieDetails.title} </Text>
          <Text style={styles.subtitle}>Subtitle </Text>
          <Text style={styles.description}>{movieDetails.description}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigation.navigate('Video')}>
        <Icon reverse name="play-arrow" type="material" color={colors.blue} />
      </TouchableOpacity>
    </Screen>
  );
}

export default MovieDetails;
