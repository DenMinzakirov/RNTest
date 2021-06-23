import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';

import { getMovies, setSearchString } from '../../redux/actions';

const Main = (props) => {
  console.log('Main', props);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies(result));
  const setStringSearch = (data) => dispatch(setSearchString(data))

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
          onBlur={()=>{
            setStringSearch(result)
          }}
        />
        <Button
          title='Найти'
          containerStyle={{ width: '80%', marginVertical: 20 }}
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
