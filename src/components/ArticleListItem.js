import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../themes/colors';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 29,
    paddingBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: width * 0.248,
    aspectRatio: 93 / 81,
  },
  articleTextContainer: {
    marginLeft: 19,
  },
  publisherText: {
    fontFamily: 'MuktaMaheeBold',
    fontSize: RFValue(11, 812),
    color: Colors.LIST_ARTICLE_PUBLISHER_TEXT,
    textAlign: 'left',
    lineHeight: 18.28,
  },
  titleText: {
    fontFamily: 'MuktaMaheeRegular',
    fontSize: RFValue(13, 812),
    color: Colors.LIST_ARTICLE_TITLE_TEXT,
    textAlign: 'left',
    lineHeight: 21.61,
  },
  publishTimeText: {
    fontFamily: 'MuktaMaheeRegular',
    fontSize: RFValue(9, 812),
    color: Colors.LIST_ARTICLE_POSTDATE_TEXT,
    textAlign: 'left',
    lineHeight: 14.96,
  },
});

const ArticleListItem = ({data, onDetail}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: data.urlToImage}}
        style={styles.thumbnail}
        resizeMode={'cover'}
      />
      <View style={styles.articleTextContainer}>
        <Text style={styles.publisherText}>{data.source.name}</Text>
        <TouchableOpacity onPress={() => onDetail(data)}>
          <Text style={styles.titleText}>{data.title}</Text>
        </TouchableOpacity>
        <Text style={styles.publishTimeText}>{data.publishedAt}</Text>
      </View>
    </View>
  );
};

export {ArticleListItem};
