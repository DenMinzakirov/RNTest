import React from 'react';
import { View, Modal } from 'react-native';
import Item from '../../components/Item';
import styles from './styles';

const ModalItem = ({ state, hideModal }) => {
  return (
    <View
      style={[
        styles.modalWrap,
        {
          backgroundColor: `rgba(21, 24, 28, ${
            state.isVisibleModal ? 0.5 : 0
          })`,
          width: state.isVisibleModal ? '100%' : 0,
          height: state.isVisibleModal ? '100%' : 0,
        },
      ]}
    >
      <Modal
        animationType='slide'
        transparent={true}
        visible={state.isVisibleModal}
        onRequestClose={() => {
          hideModal();
        }}
      >
        <View style={styles.itemWrap}>
          <Item item={state.modalData} isModal={true} hideModal={hideModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalItem;
