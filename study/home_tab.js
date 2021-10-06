import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function TabHomeScreen() {
  return (
    <View>
      <Text>Home Screen </Text>
      <Button
        title="Go to home stack screen"
        onPress={() => {
          this.this.props.navigation.navigate('User');
        }}></Button>
    </View>
  );
}
