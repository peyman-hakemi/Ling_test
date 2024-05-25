/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import MainWrapper from './src/layouts/MainWrapper';

function App(): React.JSX.Element {
  return (
    <MainWrapper>
      <HomeScreen />
    </MainWrapper>
  );
}

const styles = StyleSheet.create({});

export default App;
