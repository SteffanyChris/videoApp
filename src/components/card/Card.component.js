import React from 'react';
import { TouchableOpacity, Text, ImageBackground, View } from 'react-native';
import styles from './Card.styles';

const Card = ({ 
	type, title, image, description, category, onPress
}) => {

	switch(type){
		case 'vertical':
			return(
				<TouchableOpacity style={styles.verticalCardContainer} onPress={onPress}>
					<ImageBackground style={styles.verticalCardImage} source={{uri:image}}/>
					<View style={styles.verticalCardTextContainer}>
						<Text>{title}</Text>
						<Text style={styles.categoryText}>Category</Text>
					</View>
				</TouchableOpacity>
			)
		//To to: component for search screen 
		case 'horizontal':
			return(
				<TouchableOpacity onPress={onPress}>
					<Text>horizontal</Text>
				</TouchableOpacity>
			)
		default: 
			return(
				<TouchableOpacity style={styles.container} onPress={onPress}>
					<ImageBackground style={styles.image} source={{uri:image}}/>
					<Text style={styles.description} ellipsizeMode='tail' numberOfLines={2} >{description}</Text>
					<Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
				</TouchableOpacity>
			)
	}
}

export default Card;