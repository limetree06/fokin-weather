import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Input from './src/input';

class Home extends Component {
  render() {
    return (
      <View>
        <Text>home Screen</Text>
        <Button
          title="To user Screen"
          onPress={() => {
            this.props.navigation.navigate('user', {
              userIdx: 100,
              userName: 'minji',
              userLastName: 'son',
            });
          }}></Button>

        <Button
          title="change the title"
          onPress={() =>
            this.props.navigation.setOptions({
              title: 'Changed!!',
              headerStyle: {backgroundColor: 'pink'},
              headerTintColor: 'red',
            })
          }></Button>
      </View>
    );
  }
}

export default Home;
