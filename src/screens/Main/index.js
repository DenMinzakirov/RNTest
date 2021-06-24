import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';

import { getMovies, setSearchString, setClearData } from '../../redux/actions';

const Main = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.moviesReducer);
  console.log('Main-props', props, 'Main-state', state);
  const fetchMovies = () => dispatch(getMovies(result));
  const setStringSearch = (data) => dispatch(setSearchString(data));
  const clearing = () => dispatch(setClearData());

  const [result, setResult] = useState('');

  const handleInput = (text) => {
    setResult(text);
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
          value={result}
          onBlur={() => {
            setStringSearch(result);
          }}
          onFocus={()=>{
            clearing()
          }}
        />
        <Button
          title='Найти'
          containerStyle={{ width: '80%', marginVertical: 20, borderWidth: 1 }}
          disabled={!result}
          onPress={() => {
            fetchMovies();
            props.navigation.navigate('List');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;
