import React from 'react';
import {
  TouchableOpacity,
  Text,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import {Rating, CheckBox} from 'react-native-elements';
import colors from '../../utils/colors';
import styles from './Card.styles';

const Card = ({type, title, image, description, rating, onPress}) => {
  switch (type) {
    case 'vertical':
      return (
        <TouchableOpacity
          style={styles.verticalCardContainer}
          onPress={onPress}>
          <ImageBackground
            style={styles.verticalCardImage}
            source={{uri: image}}
          />
          <View style={styles.verticalCardTextContainer}>
            <Text>{title}</Text>
            <Text style={styles.categoryText}>Category</Text>
          </View>
        </TouchableOpacity>
      );
    //To to: component for search screen
    case 'horizontal':
      return (
        <TouchableOpacity style={styles.horizontalContainer} onPress={onPress}>
          <Image style={styles.horizontalImage} source={{uri: image}} />
          <View style={styles.horizontalTextContainer}>
            <Text
              style={styles.horizontalTitle}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {title}
            </Text>
            <Text
              style={styles.horizontalDescription}
              ellipsizeMode="tail"
              numberOfLines={3}>
              {description}
            </Text>
            <View style={styles.ratingContainer}>
              <Rating
                type="custom"
                ratingColor={colors.darkGray}
                ratingBackgroundColor={colors.blue}
                tintColor={colors.white}
                readonly
                ratingCount={5}
                imageSize={20}
                fractions={1}
                startingValue={rating}
              />
              <CheckBox
                iconType="material"
                checkedIcon="star"
                uncheckedIcon="star-border"
                checkedColor={colors.blue}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <ImageBackground style={styles.image} source={{uri: image}} />
          <Text
            style={styles.description}
            ellipsizeMode="tail"
            numberOfLines={2}>
            {description}
          </Text>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </TouchableOpacity>
      );
  }
};

export default Card;
