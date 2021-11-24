import React from 'react';
import {format} from 'date-fns';
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

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 29,
    marginBottom: 13,
    paddingLeft: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: width * 0.248,
    aspectRatio: 93 / 81,
  },
  articleTextContainer: {
    marginLeft: 19,
    flexShrink: 1,
  },
  publisherText: {
    fontFamily: 'MuktaMaheeBold',
    fontSize: RFValue(11, 768),
    color: Colors.LIST_ARTICLE_PUBLISHER_TEXT,
    textAlign: 'left',
    lineHeight: RFValue(18.28, 768),
  },
  titleText: {
    fontFamily: 'MuktaMaheeRegular',
    fontSize: RFValue(13, 768),
    color: Colors.LIST_ARTICLE_TITLE_TEXT,
    textAlign: 'left',
    lineHeight: RFValue(21.61, 768),
  },
  publishTimeText: {
    fontFamily: 'MuktaMaheeRegular',
    fontSize: RFValue(9, 768),
    color: Colors.LIST_ARTICLE_POSTDATE_TEXT,
    textAlign: 'left',
    lineHeight: RFValue(14.96, 768),
  },
});

const ArticleListItem = ({data, onDetail}) => {
  const publishDate = new Date(data.publishedAt);
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
        <Text style={styles.publishTimeText}>
          {format(publishDate, 'MMMM dd, yyyy')}
        </Text>
      </View>
    </View>
  );
};

export {ArticleListItem};
