import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {NewsApi, NewsEndpoints, throwNetworkException} from '../api/NewsApi';
import {ArticleListItem} from '../components/ArticleListItem';
import {CountryButton} from '../components/CountryButton';
import {FlatlistErrorView} from '../components/FlatlistErrorView';
import {Headline} from '../components/Headline';
import {Colors} from '../themes/colors';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.SCREEN_BACKGROUND,
    paddingTop: 16,
    flex: 1,
  },
  screenTitle: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: RFValue(24, 768),
    lineHeight: RFValue(36, 768),
    color: Colors.SCREEN_TITLE_TEXT,
    marginLeft: 16,
    marginBottom: 24,
  },
  buttonListContainer: {
    width: 16,
  },
  buttonSeparator: {
    width: 9,
  },
  separatorLine: {
    backgroundColor: Colors.SEPARATOR_LINE,
    height: 4,
    width: '100%',
    marginTop: 24,
  },
  articleContainer: {
    paddingHorizontal: 17,
  },
  articleContentContainer: {
    // alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  articleSeparator: {
    backgroundColor: Colors.LIST_ARTICLE_SEPARATOR,
    height: 1,
    width: '100%',
  },
  noArticleMessageText: {
    fontFamily: 'MuktaMahee-Regular',
    fontSize: RFValue(14, 768),
    lineHeight: RFValue(18.28, 768),
    textAlign: 'center',
    marginBottom: 8,
  },
  listLoader: {
    marginBottom: 8,
  },
});

const countryList = [
  {
    label: 'United States',
    value: 'us',
  },
  {
    label: 'United Kingdom',
    value: 'uk',
  },
  {
    label: 'Australia',
    value: 'au',
  },
  {
    label: 'Singapore',
    value: 'sg',
  },
];

const apiKey = '1722765a6674428094451a85c446f830';
const pageLimit = 10;

const HomeScreen = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(countryList[0].value);
  const [articleList, setArticleList] = useState([]);
  const [totalArticle, setTotalArticle] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [listIsLoading, setListIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [listEndReached, setListEndReached] = useState(false);

  useEffect(() => {
    fetchFirstPageNews(pageLimit);
  }, [selectedCountry]);

  const fetchFirstPageNews = async limit => {
    setIsLoading(true);
    setCurrentPage(1);
    try {
      const response = await NewsApi.get(
        `${
          NewsEndpoints.headlines}?country=${selectedCountry}&page=${1}&pageSize=${limit}&apiKey=${apiKey}`,
      );
      console.log(response);
      setIsLoading(false);
      if (!response.ok) {
        setError(throwNetworkException(response.problem));
        return;
      }
      setArticleList(response.data.articles);
      setTotalArticle(response.data.totalResults);
    } catch (exception) {
      setIsLoading(false);
      setError(exception);
    }
  };

  const fetchNextPage = async (page, limit) => {
    setListIsLoading(true);
    setCurrentPage(page);
    try {
      const response = await NewsApi.get(
        `${NewsEndpoints.headlines}?country=${selectedCountry}&page=${page}&pageSize=${limit}&apiKey=${apiKey}`,
      );
      setListIsLoading(false);
      if (!response.ok) {
        setListEndReached(true);
        return;
      }
      setArticleList([...articleList, ...response.data.articles]);
      if (currentPage * pageLimit >= totalArticle) {
        setListEndReached(true);
      }
    } catch (exception) {
      setListIsLoading(false);
      setError(exception);
    }
  };

  const renderCountryButton = ({item, index}) => {
    return (
      <CountryButton
        isActive={item.value === selectedCountry}
        label={item.label}
        onPress={() => setSelectedCountry(item.value)}
        height={32}
      />
    );
  };

  const renderButtonSeparator = () => {
    return <View style={styles.buttonSeparator} />;
  };

  const renderButtonContainerPadding = () => {
    return <View style={styles.buttonListContainer} />;
  };
  const renderArticleList = ({item, index}) => {
    if (index < 1) {
      return <Headline data={item} onDetail={navigateToDetail} />;
    }
    return <ArticleListItem data={item} onDetail={navigateToDetail} />;
  };

  const renderListLoader = ({item, index}) => {
    if (!listIsLoading) {
      return null;
    }
    return (
      <ActivityIndicator
        size={20}
        color={Colors.LOADER}
        style={styles.listLoader}
      />
    );
  };

  const renderArticleSeparator = () => {
    return <View style={styles.articleSeparator} />;
  };

  const renderEmptyArticles = () => {
    if (isLoading) {
      return (
        <View>
          <ActivityIndicator
            size={20}
            color={Colors.LOADER}
            style={styles.listLoader}
          />
        </View>
      );
    }

    if (error.length > 0) {
      return (
        <FlatlistErrorView
          message={error}
          onRetry={() => fetchFirstPageNews(pageLimit)}
        />
      );
    }

    return (
      <Text style={styles.noArticleMessageText}>No articles for you yet</Text>
    );
  };

  const navigateToDetail = data => {
    navigation.navigate('Detail', {data: data});
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.screenTitle}>News</Text>
      <View>
        <FlatList
          ListHeaderComponent={renderButtonContainerPadding}
          ListFooterComponent={renderButtonContainerPadding}
          data={countryList}
          renderItem={renderCountryButton}
          horizontal={true}
          ItemSeparatorComponent={renderButtonSeparator}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.separatorLine} />
      <FlatList
        style={styles.articleContainer}
        contentContainerStyle={styles.articleContentContainer}
        data={articleList}
        renderItem={renderArticleList}
        ItemSeparatorComponent={renderArticleSeparator}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyArticles}
        ListFooterComponent={renderListLoader}
        onEndReached={() => {
          if (listEndReached) {
            return;
          }
          fetchNextPage(currentPage + 1, pageLimit);
        }}
      />
    </SafeAreaView>
  );
};

export {HomeScreen};
