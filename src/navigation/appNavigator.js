import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-elements';
import Discover from '../screens/discover/Discover';
import MovieDetails from '../screens/movieDetails/MovieDetails';
import Search from '../screens/search/Search';
import styles from './navigation.styles';
import colors from '../utils/colors';
import VideoPage from '../screens/video/VideoPage';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: colors.darkGray,
        }}>
        <Stack.Screen
          name="Discover"
          component={Discover}
          options={({navigation}) => ({
            headerRight: () => (
              <Icon
                name="search"
                type="material"
                onPress={() => navigation.navigate('Search')}
                iconStyle={styles.icon}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Details"
          component={MovieDetails}
          options={{headerTintColor: colors.white}}
        />
        <Stack.Screen name="Search" component={Search} options={{title: ''}} />
        <Stack.Screen
          name="Video"
          component={VideoPage}
          options={{headerTintColor: colors.white}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
