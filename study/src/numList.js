import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NumList = props => {
  return props.num.map((item, idx) => (
    <TouchableOpacity onPress={() => props.delete(idx)}>
      <View style={styles.numlist} key={idx}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  ));
};

const styles = StyleSheet.create({
  numlist: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});

export default NumList;
