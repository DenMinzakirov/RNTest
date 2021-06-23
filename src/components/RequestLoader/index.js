import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const RequestLoader = (props) => {
  return (
    <View style={{ height: 40, marginTop: 5 }}>
      {props.showLoader ? (
        <ActivityIndicator size='large' color='black' />
      ) : null}
    </View>
  );
};

export default RequestLoader;
