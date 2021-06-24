import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, setModalData, hideModalData } from '../../redux/actions';
import RequestLoader from '../../components/RequestLoader';
import Item from '../../components/Item';
import styles from './styles';
import { COLORS } from '../../config/constant';
import ModalItem from '../../components/ModalItem';

const List = () => {
  const state = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();
  const fetchMovies = () =>
    dispatch(getMovies(state.searchString, state.movies.length / 10 + 1));
  const [showLoader, setShowLoader] = useState(false);
  const showModal = (data) => dispatch(setModalData(data));
  const hideModal = (data) => dispatch(hideModalData());

  useEffect(() => {
    setShowLoader(false);
  }, [state.movies]);

  return (
    <SafeAreaView>
      <View style={styles.noResultContayner}>
        {!state.loading ? (
          state.movies && state.movies.length ? (
            <FlatList
              data={state.movies}
              renderItem={(props) => <Item {...props} showModal={showModal} />}
              keyExtractor={(_, index) => index}
              ListFooterComponent={<RequestLoader showLoader={showLoader} />}
              ListHeaderComponent={
                <Text style={styles.totalText}>
                  Total elements {state.totalResults}
                </Text>
              }
              onEndReachedThreshold={0.5}
              onEndReached={async () => {
                setShowLoader(true);
                if (state.totalResults / 10 > state.movies.length / 10 + 1) {
                  fetchMovies();
                } else {
                  setShowLoader(false);
                }
              }}
            />
          ) : (
            <View style={styles.noResultContayner}>
              <Text style={styles.text}>Нет Результатов</Text>
            </View>
          )
        ) : (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size='large' color={COLORS.BLACK} />
          </View>
        )}
      </View>
      <ModalItem state={state} hideModal={hideModal} />
    </SafeAreaView>
  );
};

export default List;
