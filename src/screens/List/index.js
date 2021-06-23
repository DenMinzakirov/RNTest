import React, {useEffect} from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const List = () => {
    const temp = useSelector(state => state.moviesReducer);
    console.log(temp);
    useEffect(()=>{
        console.log('qweqweqwe',temp);
    },[temp])
  return (
    <SafeAreaView>
      <View style={{ height: 200, backgroundColor: 'yellow', width: 200 }}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
};

export default List;
