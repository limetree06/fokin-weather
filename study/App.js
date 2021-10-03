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
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.mainText}>Hello World</Text>
        </View>
        <View style={styles.subView}>
          <PropsChild
            sampleText={this.state.sampleText}
            changeState={this.changeState}
          />
        </View>
        <View style={styles.anothersubView}>
          <PropsChild
            sampleText={this.state.sampleText}
            changeState={this.changeState}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  anothersubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default App;
