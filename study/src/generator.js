import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Generator = props => {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={() => props.add()} />
    </View>
  );
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '50%',
  },
});

export default Generator;
