import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { ROUTE_NAME } from '../../config/constant';

import { getMovies, setSearchString, setClearData } from '../../redux/actions';

const Main = (props) => {
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies(result));
  const setStringSearch = (data) => dispatch(setSearchString(data));
  const clearing = () => dispatch(setClearData());

  const [result, setResult] = useState('');

  const handleInput = (text) => {
    setResult(text);
  };
  return (
    <SafeAreaView>
      <View style={styles.mainWrap}>
        <Text style={styles.text}>Привет!</Text>
        <Text style={styles.text}>
          Это прилажение поможет подобрать фильмы к просмотру
        </Text>
        <Text style={styles.text}>Вводите только английские слова</Text>
        <Input
          placeholder='Введите название'
          containerStyle={styles.inputContayner}
          onChangeText={handleInput}
          value={result}
          onBlur={() => {
            setStringSearch(result);
          }}
          onFocus={() => {
            clearing();
          }}
        />
        <Button
          title='Найти'
          containerStyle={styles.buttonContayner}
          disabled={!result}
          onPress={() => {
            fetchMovies();
            props.navigation.navigate(ROUTE_NAME.LIST);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;
