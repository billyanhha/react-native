import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { StackNavigator, TabNavigator, TabBarBottom , createStackNavigator  } from 'react-navigation'; 
import HomeScreen from './containers/HomeScreen';
import PhotoScreen from './containers/PhotoScreen'

// 





export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: PhotoScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Details') {
          iconName = `ios-photos${focused ? '' : '-outline'}`;
        }

        // icon tu react-native-vector-icons
        return <Ionicons name={iconName} size={25} style ={{fontSize: 30}}/>; //default color
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);
