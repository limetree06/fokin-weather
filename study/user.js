import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Input from './src/input';

class User extends Component {
  render() {
    const {params} = this.props.route;
    const userIdx = params ? params.userIdx : null;
    const userName = params ? params.userName : null;
    const userLastName = params ? params.userLastName : null;

    return (
      <View>
        <Text>user Screen</Text>
        <Text>User : Idx : {JSON.stringify(userIdx)}</Text>
        <Text>User : name : {JSON.stringify(userName)}</Text>
        <Text>User : lastname : {JSON.stringify(userLastName)}</Text>
      </View>
    );
  }
}

export default User;
