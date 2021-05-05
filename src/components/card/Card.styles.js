import { StyleSheet } from 'react-native';
import { screenWidth } from '../../utils/screenUtils';

const screenMargin = 16;
const cardMargin = 4;
const cardSize = (screenWidth - 2* screenMargin ) / 3 - 3* cardMargin;

export default StyleSheet.create({
	container: {
		height: 250,
		shadowColor: '#000',
    	shadowOffset: { width: 2, height: 2 },
    	shadowOpacity: 0.8,
    	shadowRadius: 5,  
    	elevation: 5,
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
	},
	title: {
		position: 'absolute',
		left: 16,
		bottom: 16,
		fontSize: 32,
		fontWeight: 'bold'
	},
	description: {
		position: 'absolute',
		left: 16,
		bottom: 55,
		fontSize: 16
	},
	verticalCardContainer: {
		height: 230,
		width: cardSize,
		backgroundColor: 'white',
		shadowColor: '#000',
    	shadowOffset: { width: 0, height: 2 },
    	shadowOpacity: 0.8,
    	shadowRadius: 5,  
    	elevation: 5
	},
	verticalCardImage: {
		flex: .7,
		resizeMode: 'cover'
	},
	verticalCardTextContainer: {
		flex: .3,
		margin: 8,
	},
	categoryText: {
		fontSize: 14,
		color: 'gray',
	}
})