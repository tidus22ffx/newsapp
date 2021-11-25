import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();

const RootStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{headerShown: Platform.OS === 'ios'}}
      />
    </Stack.Navigator>
  );
};

export {RootStackNavigation};
