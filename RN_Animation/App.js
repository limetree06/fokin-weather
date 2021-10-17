import React, {useEffect} from 'react';
import {Animated, View, Text, StyleSheet} from 'react-native';

const App = () => {
  const mySquare = Animated.ValueXY(0, 0);

  useEffect(() => {
    Animated.spring(mySquare, {toValue: {x: 50, y: 300}}).start();
  }, []);

  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default App;
