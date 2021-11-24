import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Button} from './Button';

const styles = StyleSheet.create({
  viewContainer: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    fontFamily: 'MuktaMaheeRegular',
    fontSize: RFValue(14, 768),
    lineHeight: RFValue(18.28, 768),
    textAlign: 'center',
    marginBottom: 8,
  },
});
const FlatlistErrorView = ({message, onRetry}) => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.messageText}>{message}</Text>
      <Button label={'Retry'} onPress={onRetry} height={32} width={80} />
    </View>
  );
};

export {FlatlistErrorView};
