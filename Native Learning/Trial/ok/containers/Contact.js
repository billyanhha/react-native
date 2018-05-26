import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contact Screen</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Contact: {
    screen: ContactScreen
  },
});