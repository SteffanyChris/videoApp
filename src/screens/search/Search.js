import React, {useState, createRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Screen from '../screen/Screen';
import Card from '../../components/card/Card.component';
import {createStructuredSelector} from 'reselect';
import {
  selectSearchResults,
  selectSearchIsLoading,
} from '../../redux/search/selectors';
import {clearSearch, fetchSearchStart} from '../../redux/search/actions';
import {baseImageUri} from '../../utils/imageUtils';
import styles from './Search.styles';
import colors from '../../utils/colors';
import {Icon} from 'react-native-elements';

function Search({
  searchResults,
  searchItem,
  navigation,
  clearSearchResults,
  isLoading,
}) {
  useEffect(() => {
    return () => {
      clearSearchResults();
    };
  },[]);

  const [query, setQuery] = useState('');
  const input = createRef();

  const renderItem = ({item}) => (
    <Card
      type="horizontal"
      title={item.title}
      description={item.description}
      image={`${baseImageUri}${item.image}`}
      rating={item.rating}
      onPress={() =>
        navigation.navigate('Details', {
          movieDetails: item,
        })
      }
    />
  );
  const handleClearSearch = () => {
    if (query) {
      setQuery('');
      input.current.clear();
    }
  };
  return (
    <Screen noPadding>
      <View style={styles.inputContainer}>
        <TextInput
          ref={input}
          style={styles.input}
          onChangeText={setQuery}
          onEndEditing={() => searchItem(query)}
          value={query}
          placeholder="Type to search..."
          placeholderTextColor={colors.darkGray}
        />
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClearSearch}>
          <Icon name="close" />
        </TouchableOpacity>
      </View>
      {searchResults.length ? (
        <View>
          <ActivityIndicator
            animating={isLoading}
            color={colors.black}
            size="large"
          />
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            style={styles.flatList}
          />
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.emptyText}>
            Search a movie or tv show by name
          </Text>
        </View>
      )}
    </Screen>
  );
}

const mapStateToProps = createStructuredSelector({
  searchResults: selectSearchResults,
  isLoading: selectSearchIsLoading,
});

const mapDispatchToProps = dispatchEvent => ({
  searchItem: query => dispatchEvent(fetchSearchStart(query)),
  clearSearchResults: () => dispatchEvent(clearSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
