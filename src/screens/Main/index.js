import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

const Main = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}
      >
        <Text
          style={{
            backgroundColor: 'yellow',
            textAlign: 'center',
            marginVertical: 20,
          }}
        >
          Hello!
        </Text>
        <Text
          style={{
            backgroundColor: 'yellow',
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
        />
        <Button
          title='Найти'
          containerStyle={{ width: '80%', marginVertical: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;
