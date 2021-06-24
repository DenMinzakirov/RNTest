import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
const noImg = require('../../../assets/not-available.png');
import styles from './styles';
import { COLORS } from '../../config/constant';

const Item = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (!props.isModal) {
          props.showModal(props.item);
        } else {
          props.hideModal();
        }
      }}
    >
      <View
        style={[
          styles.itemWrap,
          {
            backgroundColor: props.isModal ? COLORS.GRAY : COLORS.WHITE,
            borderColor: props.isModal ? COLORS.GRAY : COLORS.LIGHT_GRAY,
          },
        ]}
      >
        <Text style={styles.text}>
          {props.item.Title} <Text>{props.item.Year}</Text>
        </Text>
        <Image
          style={[
            styles.image,
            {
              height: props.isModal ? 300 : 200,
            },
          ]}
          source={
            props.item.Poster !== 'N/A' ? { uri: props.item.Poster } : noImg
          }
        />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
