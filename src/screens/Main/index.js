import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';

import { getMovies, addFavorite, removeFavorite } from '../../redux/actions';

const Main = () => {
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies('123'));

  const handleInput = (text) => {
    console.log('text', text);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 20,
          }}
        >
          Hello!
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginHorizontal: 20,
            marginVertical: 20,
          }}
        >
          Это прилажение поможет подобрать фильмы к просмотру
        </Text>
        <Input
          placeholder='Введите название'
          containerStyle={{ width: '80%', marginVertical: 20 }}
          onChangeText={handleInput}
        />
        <Button
          title='Найти'
          containerStyle={{ width: '80%', marginVertical: 20 }}
          onPress={() => {
            fetchMovies();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;
