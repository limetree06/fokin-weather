/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropsChild from './propsChild';

class App extends Component {
  state = {
    sampleText: 'Hello World',
    sampleBoolean: true,
    sampleNum: 1,
  };

  inputText = () => {
    return this.state.sampleBoolean ? (
      <Text>sampleBoolean is false </Text>
    ) : (
      <Text>sampleBoolean is ture </Text>
    );
  };

  changeState = () => {
    if (this.state.sampleBoolean) {
      this.setState({
        sampleText: 'Text Changed!!',
        sampleBoolean: false,
      });
    } else {
      this.setState({
        sampleText: 'Hello World!!!',
        sampleBoolean: true,
      });
    }
  };

  onAdd = () => {
    this.setState(prevState => {
      return {sampleNum: prevState.sampleNum + 1};
    });
  };

  render() {
    return (
      <View style={styles.background}>
        <PropsChild
          sampleText={this.state.sampleText}
          changeState={this.changeState}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
