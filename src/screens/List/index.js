import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const mock = [
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_SX300.jpg',
    Title: 'American Sniper',
    Type: 'movie',
    Year: '2014',
    imdbID: 'tt2179136',
  },
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZWUzOGNjMzItZmM5MC00NTQzLTk3YjQtZWMwZmRhOGJhZDczXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg',
    Title: 'Sniper',
    Type: 'movie',
    Year: '1993',
    imdbID: 'tt0108171',
  },
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_SX300.jpg',
    Title: 'American Sniper',
    Type: 'movie',
    Year: '2014',
    imdbID: 'tt2179136',
  },
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZWUzOGNjMzItZmM5MC00NTQzLTk3YjQtZWMwZmRhOGJhZDczXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg',
    Title: 'Sniper',
    Type: 'movie',
    Year: '1993',
    imdbID: 'tt0108171',
  },
];

const List = () => {
  const temp = useSelector((state) => state.moviesReducer);
  console.log(temp);
  useEffect(() => {
    console.log('qweqweqwe', temp);
  }, [temp]);
  const renderItem = (props) => {
    console.log('renderItem', props);
    return (
      <View style={{alignSelf: 'center', marginVertical: 20, padding: 20, borderWidth: 1, borderRadius: 8}}>
        <Text style={{textAlign: 'center',marginBottom: 15}}>{props.item.Title} <Text>{props.item.Year}</Text></Text>
        <Image
          style={{height: 250, width: 250, borderRadius: 8}}
          source={{
            uri: props.item.Poster,
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View >
        {/* <Text>List</Text> */}
        <FlatList
          data={mock}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;
