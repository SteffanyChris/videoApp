import { StyleSheet } from 'react-native';
import { colors } from 'react-native-elements';

export default StyleSheet.create({
    screen: {
        flex:1,
        paddingHorizontal: 8,
		backgroundColor: colors.lightGray,
		paddingTop: 60,
    },
    noPadding: {
        paddingHorizontal: 0,
        paddingTop: 0,
    }
})