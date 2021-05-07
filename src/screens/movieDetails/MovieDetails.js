import React from 'react';
import { Text, ImageBackground, View } from 'react-native';
import { Icon } from "react-native-elements";
import Screen from '../screen/Screen';
import styles from './MovieDetails.styles';
import { baseImageUri } from '../../utils/imageUtils';

function MovieDetails({route, navigation}) {
	const { movieDetails } = route.params;
	return(
		<Screen noPadding>
			<View style={styles.container} >
				<ImageBackground style={styles.image} source={{uri:`${baseImageUri}${movieDetails.image}`}}/>
				<View style={styles.textContainer}>
					<Text style={styles.title}>{movieDetails.title} </Text>
					<Text style={styles.subtitle}>Subtitle </Text>
					<Text style={styles.description}>{movieDetails.description}</Text>
					<Icon
						reverse
						name="play-arrow"
						type="material"
						color="#59bfff"
						containerStyle={styles.icon}
						onPress={() => navigation.navigate('Video')}
					/>
				</View>
			</View>
		</Screen>
	)
}

export default MovieDetails;