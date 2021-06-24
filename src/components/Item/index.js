import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies, setSearchString } from '../../redux/actions';
import RequestLoader from '../../components/RequestLoader';
const noImg = require('../../../assets/not-available.png');

const Item = (props) => {
  console.log('Item', props);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('PRES');
        if (!props.isModal) {
          props.showModal(props.item);
        } else {props.hideModal()}
      }}
    >
      <View
        style={{
          alignSelf: 'center',
          marginVertical: 20,
          padding: 20,
          borderWidth: 1,
          borderRadius: 8,
          backgroundColor: props.isModal ? 'grey' : 'white',
        }}
      >
        <Text style={{ textAlign: 'center', marginBottom: 15, width: 250 }}>
          {props.item.Title} <Text>{props.item.Year}</Text>
        </Text>
        <Image
          style={{ height: props.isModal ? 300 : 200, width: 250, borderRadius: 8 }}
          source={
            props.item.Poster !== 'N/A' ? { uri: props.item.Poster } : noImg
          }
        />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
