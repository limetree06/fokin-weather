/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends Component {
  state = {
    sampleText: 'Hello World',
    sampleBoolean: false,
  };

  inputText = () => {
    return this.state.sampleBoolean ? (
      <Text>sampleBoolean is false </Text>
    ) : (
      <Text>sampleBoolean is ture </Text>
    );
  };

  changeState = () => {
    this.setState({
      sampleText: 'Text Changed!!',
    });
  };

  render() {
    return (
      <View>
        <Text onPress={this.changeState}>{this.state.sampleText}</Text>
      </View>
    );
  }
}
export default App;
