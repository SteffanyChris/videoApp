import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import { screenWidth } from '../../utils/screenUtils';
import { baseImageUri } from '../../utils/imageUtils';
import Card from '../card/Card.component';
import { View, Text } from 'react-native';
import styles from './CarouselComponent.styles';
import { useNavigation } from '@react-navigation/native';

const CarouselComponent = ({
	data, 
	cardType, 
	cardSize,
	header,
	onEndReached,
	isLoading
}) => {

	const [index, setIndex] = useState(0);
	const navigation = useNavigation();

	const renderItem = ({item}) => (
		<Card type={cardType}
			title={item.title}
			description={item.description}
			category={item.categoryName}
			image={`${baseImageUri}${item.image}`}
			onPress={()=> navigation.navigate('Details',{
				movieDetails: item
			})}
		/>
	)

	return (
		<View>
			<Text style={styles.header}>{header}</Text>
			<Carousel
				sliderWidth={screenWidth-16}
				sliderHeight={screenWidth}
				itemWidth={cardSize}
				data={data}
				renderItem={renderItem}
				activeSlideAlignment='start'
				inactiveSlideScale={.95}
				onEndReached={onEndReached}
				onSnapToItem = { index => setIndex({index}) }
			/>
		</View>
	);
}

export default CarouselComponent;