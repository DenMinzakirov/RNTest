import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMovies,
  setSearchString,
  setModalData,
  hideModalData,
} from '../../redux/actions';
import RequestLoader from '../../components/RequestLoader';
import Item from '../../components/Item';
const noImg = require('../../../assets/not-available.png');

const DEFAULT_IMAGE = Image.resolveAssetSource(noImg).uri;

const List = (props) => {
  console.log('List', props);
  const state = useSelector((state) => state.moviesReducer);
  console.log('state', state);
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
      <View>
        {!state.loading ? (
          state.movies && state.movies.length ? (
            <FlatList
              data={state.movies}
              renderItem={(props) => <Item {...props} showModal={showModal} />}
              keyExtractor={(item, index) => index}
              ListFooterComponent={<RequestLoader showLoader={showLoader} />}
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
      <View
        style={{
          position: 'absolute',
          backgroundColor: `rgba(21, 24, 28, ${
            state.isVisibleModal ? 0.85 : 0
          })`,
          width: state.isVisibleModal ? '100%' : 0,
          height: state.isVisibleModal ? '100%' : 0,
          zIndex: 5,
        }}
      >
        <Modal
          animationType='slide'
          transparent={true}
          visible={state.isVisibleModal}
          onRequestClose={() => {
            hideModal();
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              width: '90%',
              height: '80%',
              alignSelf: 'center',
              marginVertical: 50,
            }}
          >
            <Item item={state.modalData} isModal={true} hideModal={hideModal} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default List;
