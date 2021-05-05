import React from 'react';
import { Text, ImageBackground, View } from 'react-native';
import { Icon } from "react-native-elements";
import Screen from '../screen/Screen';
import styles from './MovieDetails.styles';

function MovieDetails() {
	return(
		<Screen noPadding>
			<View style={styles.container} >
				<ImageBackground style={styles.image} source={{uri:'https://www.comingsoon.net/assets/uploads/2020/05/f34dbf30a4d3a7462b1ca5b219ba9400.jpg'}}/>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Asset Name </Text>
					<Text style={styles.subtitle}>Subtitle </Text>
					<Text style={styles.description}>The following example shows how different properties can affect or shape a React Native layout. You can try for example to add or remove squares from the UI while changing the values of the property </Text>
					<Icon
						reverse
						name="play-arrow"
						type="material"
						color="#59bfff"
						containerStyle={styles.icon}
					/>
				</View>
			</View>
		</Screen>
	)
}

export default MovieDetails;