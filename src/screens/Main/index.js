import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { COLORS, ROUTE_NAME } from '../../config/constant';

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

  const handleSubmit = () => {
    fetchMovies();
    props.navigation.navigate(ROUTE_NAME.LIST);
  };

  return (
    <SafeAreaView>
      <View style={styles.mainWrap}>
        <Text style={styles.text}>Hello!</Text>
        <Text style={styles.text}>
          This application will help you choose movies to watch
        </Text>
        <Input
          placeholder='Enter the name'
          containerStyle={styles.inputContayner}
          onChangeText={handleInput}
          value={result}
          onBlur={() => {
            setStringSearch(result);
          }}
          onFocus={() => {
            clearing();
          }}
          onSubmitEditing={handleSubmit}
        />
        <Button
          title='Search'
          containerStyle={styles.buttonContayner}
          disabled={!result}
          onPress={handleSubmit}
          buttonStyle={{backgroundColor: COLORS.BLUE}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;
