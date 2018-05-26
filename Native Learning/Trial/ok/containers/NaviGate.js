import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class PhotoScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Navigate Screen</Text>
      </View>
    );
  }
}

export default createStackNavigator({
    Navigate: {
    screen: NavigateScreen
  },
});