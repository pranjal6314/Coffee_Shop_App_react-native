/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { useStore } from '../store/Store';
const HomeScreen = () => {
  const coffeeList = useStore((state: any) => state.coffeeList);
  // console.log(coffeeList);
  return (
    <View>
      <Text>Home </Text>
    </View>
  );
};

export default HomeScreen;
