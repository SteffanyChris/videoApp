import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../utils/colors';
import { screenWidth } from '../../utils/screenUtils';

const screenMargin = 16;
const cardMargin = 4;
export const cardSize = (screenWidth - 2* screenMargin ) / 3 - 3* cardMargin;

export default StyleSheet.create({
	container: {
		height: hp('40%'),
		shadowColor: colors.black,
    	shadowOffset: { width: 2, height: 2 },
    	shadowOpacity: 0.8,
    	shadowRadius: 5,  
    	elevation: 5,
	},
	image: {
		flex: 1,
		resizeMode: 'contain'
	},
	title: {
		position: 'absolute',
		left: 16,
		right:16,
		bottom: 16,
		fontSize: 26,
		color: colors.white,
		fontWeight: 'bold'
	},
	description: {
		position: 'absolute',
		left: 16,
		right: 16,
		bottom: 55,
		fontSize: 16,
		color: colors.white
	},
	verticalCardContainer: {
		height: 230,
		width: cardSize,
		backgroundColor: colors.white,
		shadowColor: colors.black,
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
		color: colors.darkGray,
	}
})