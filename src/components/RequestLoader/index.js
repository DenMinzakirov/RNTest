import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { COLORS } from '../../config/constant';

const RequestLoader = ({ showLoader }) => {
  return (
    <View style={styles.requestLoader}>
      {showLoader ? (
        <ActivityIndicator size='large' color={COLORS.BLACK} />
      ) : null}
    </View>
  );
};

export default RequestLoader;
