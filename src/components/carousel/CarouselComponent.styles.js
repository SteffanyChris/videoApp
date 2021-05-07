import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
	header: {
		color: 'gray',
		fontSize: 28,
		fontWeight: 'bold',
		height: hp('10%'),
		textAlignVertical: 'center'
	}
})