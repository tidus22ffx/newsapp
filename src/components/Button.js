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
  label: {
    fontFamily: 'SourceSansProRegular',
    fontSize: RFValue(14),
    color: Colors.COUNTRY_BUTTON_TEXT,
  },
});

const Button = ({label, onPress, height, width, style, labelStyle}) => {
  const buttonStyle = {...styles.button, ...style};
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...buttonStyle, height: height, width: width}}>
      <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
    </TouchableOpacity>
  );
};

export {Button};
