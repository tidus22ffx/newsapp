import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {CountryButton} from '../components/CountryButton';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <CountryButton label={'United Kingdom'} height={32} />
      <CountryButton isActive label={'United Kingdom'} height={32} />
    </SafeAreaView>
  );
};

export {HomeScreen};
