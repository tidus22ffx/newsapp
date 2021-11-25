import format from 'date-fns/format';
import React, {useState} from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../themes/colors';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.SCREEN_BACKGROUND,
    paddingTop: Platform.OS === 'ios' ? -8 : 16,
    paddingHorizontal: 16,
    flex: 1,
  },
  screenTitle: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: RFValue(24, 768),
    lineHeight: RFValue(36, 768),
    color: Colors.SCREEN_TITLE_TEXT,
    marginBottom: 28,
  },
  image: {
    width: '100%',
    aspectRatio: 343 / 170,
  },
  publisherText: {
    marginTop: 10,
    fontFamily: 'MuktaMahee-Bold',
    fontSize: RFValue(12, 768),
    color: Colors.ARTICLE_PUBLISHER_TEXT,
    textAlign: 'left',
    lineHeight: RFValue(19.94, 768),
  },
  titleText: {
    marginTop: 9,
    fontFamily: 'MuktaMahee-Bold',
    fontSize: RFValue(18, 768),
    color: Colors.ARTICLE_TITLE_TEXT,
    textAlign: 'left',
    lineHeight: RFValue(29.92, 768),
  },
  authorText: {
    marginTop: 14,
    fontFamily: 'MuktaMahee-Regular',
    fontSize: RFValue(10, 768),
    color: Colors.ARTICLE_AUTHOR_TEXT,
    textAlign: 'left',
    lineHeight: RFValue(16.62, 768),
  },
  descriptionText: {
    marginTop: 28,
    fontFamily: 'MuktaMahee-Regular',
    fontSize: RFValue(14, 768),
    color: Colors.ARTICLE_BODY_TEXT,
    textAlign: 'left',
    lineHeight: RFValue(23.27, 768),
  },
  contentText: {
    marginTop: 16,
    fontFamily: 'MuktaMahee-Regular',
    fontSize: RFValue(14, 768),
    color: Colors.ARTICLE_BODY_TEXT,
    textAlign: 'left',
    lineHeight: RFValue(23.27, 768),
  },
  urlText: {
    marginTop: 24,
    fontFamily: 'MuktaMahee-Regular',
    fontSize: RFValue(14, 768),
    color: Colors.ARTICLE_URL,
    textAlign: 'left',
    lineHeight: RFValue(23.27, 768),
  },
});
const DetailScreen = ({navigation, route}) => {
  const [data, setData] = useState(route.params.data);
  const publishDate = new Date(data.publishedAt);
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView  scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <Text style={styles.screenTitle}>Details</Text>
        <Image
          source={{uri: data.urlToImage}}
          style={styles.image}
          resizeMode={'cover'}
        />
        <Text style={styles.publisherText}>{data.source.name}</Text>
        <Text style={styles.titleText}>{data.title}</Text>
        <Text style={styles.authorText}>
          {data.author}
          {data.author ? ' | ' : ' '}
          {format(publishDate, 'MMMM dd, yyyy')}
        </Text>
        <Text style={styles.descriptionText}>{data.description}</Text>
        <Text style={styles.contentText}>{data.content}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(data.url)}>
          <Text style={styles.urlText}>{data.url}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export {DetailScreen};
