import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../themes/colors';

// const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingBottom: 18,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 341 / 170,
  },
  articleTextContainer: {
    marginLeft: 19,
  },
  publisherText: {
    marginTop: 7,
    fontFamily: 'MuktaMahee-Bold',
    fontSize: RFValue(11, 768),
    color: Colors.HEADLINE_PUBLISHER_TEXT,
    textAlign: 'left',
    lineHeight: RFValue(18.28, 768),
  },
  titleText: {
    fontFamily: 'MuktaMahee-Regular',
    fontSize: RFValue(14, 768),
    color: Colors.HEADLINE_TITLE_TEXT,
    textAlign: 'left',
    lineHeight: RFValue(23.27, 768),
  },
  descriptionText: {
    fontFamily: 'MuktaMahee-Regular',
    fontSize: RFValue(10, 768),
    color: Colors.HEADLINE_DESCRIPTION,
    textAlign: 'left',
    lineHeight: RFValue(16.62, 768),
  },
});

const Headline = ({data, onDetail, descriptionLength}) => {
  const limitedDescriptionText = `${data.description.substr(
    0,
    descriptionLength,
  )} ...`;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: data.urlToImage}}
        style={styles.thumbnail}
        resizeMode={'cover'}
      />
      <Text style={styles.publisherText}>{data.source.name}</Text>
      <TouchableOpacity onPress={() => onDetail(data)}>
        <Text style={styles.titleText}>{data.title}</Text>
      </TouchableOpacity>
      <Text style={styles.descriptionText}>{limitedDescriptionText}</Text>
    </View>
  );
};

export {Headline};
