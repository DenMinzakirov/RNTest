import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, setSearchString } from '../../redux/actions';
import RequestLoader from '../../components/RequestLoader';
const noImg = require('../../../assets/not-available.png');

const DEFAULT_IMAGE = Image.resolveAssetSource(noImg).uri;

const List = (props) => {
  console.log('List', props);
  const state = useSelector((state) => state.moviesReducer);
  console.log(state);
  const dispatch = useDispatch();
  const fetchMovies = () =>
    dispatch(getMovies(state.searchString, state.movies.length / 10 + 1));
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    setShowLoader(false);
  }, [state.movies]);

  const renderItem = (props) => {
    console.log('renderItem', props);
    return (
      <View
        style={{
          alignSelf: 'center',
          marginVertical: 20,
          padding: 20,
          borderWidth: 1,
          borderRadius: 8,
        }}
      >
        <Text style={{ textAlign: 'center', marginBottom: 15, width: 250 }}>
          {props.item.Title} <Text>{props.item.Year}</Text>
        </Text>
        <Image
          style={{ height: 250, width: 250, borderRadius: 8 }}
          source={
            props.item.Poster !== 'N/A' ? { uri: props.item.Poster } : noImg
          }
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View>
        {!state.loading ? (
          (state.movies && state.movies.length) ? (
            <FlatList
              data={state.movies}
              renderItem={renderItem}
              keyExtractor={(item, index) => index}
              ListFooterComponent={<RequestLoader showLoader={showLoader} />}
              onEndReachedThreshold={0.5}
              onEndReached={async () => {
                setShowLoader(true);
                console.log('NEXT', state.totalResults / 10);
                console.log('NEXT', state.movies.length / 10 + 1);
                if (state.totalResults / 10 > state.movies.length / 10 + 1) {
                  console.log('ZAPROS');
                  fetchMovies();
                } else {
                  setShowLoader(false);
                }
              }}
            />
          ) : (
            <View style={{ height: '100%', justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center' }}>Нет Результатов</Text>
            </View>
          )
        ) : (
          <View style={{ height: '100%', justifyContent: 'center' }}>
            <ActivityIndicator size='large' color='black' />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default List;
