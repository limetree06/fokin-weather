/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Input from './src/input';

class AppNumber extends Component {
  state = {
    appName: 'My first app',
    random: [36, 990],
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum],
      };
    });
  };

  onNumDelete = position => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    });
    this.setState({
      random: newArray,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName} />
        <View>
          <Text
            style={styles.mainText}
            onPress={() => alert('text touch event')}>
            Hello World!!
          </Text>
        </View>

        <Generator add={this.onAddRandomNum} />
        <ScrollView style={{width: '100%'}}>
          <NumList num={this.state.random} delete={this.onNumDelete} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },

  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
});

export default AppNumber;
