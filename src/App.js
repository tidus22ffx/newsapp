/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackNavigation} from './navigation/RootStackNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
