import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from '../themes/colors';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.COUNTRY_BUTTON,
    borderRadius: 4,
    paddingHorizontal: 12,
    borderColor: Colors.COUNTRY_BUTTON_BORDER,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSelected: {
    backgroundColor: Colors.SELECTED_COUNTRY_BUTTON,
    borderRadius: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: RFValue(14),
    color: Colors.COUNTRY_BUTTON_TEXT,
  },
  labelSelected: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: RFValue(14),
    color: Colors.SELECTED_COUNTRY_BUTTON_TEXT,
  },
});

const CountryButton = ({isActive, label, onPress, height, width}) => {
  const backgroundStyle = isActive ? styles.buttonSelected : styles.button;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...backgroundStyle, height: height}}>
      <Text style={isActive ? styles.labelSelected : styles.label}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export {CountryButton};
