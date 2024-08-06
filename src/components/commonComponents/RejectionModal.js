import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../colors';

function RejectionModal({
  setModalVisible,
  isModalVisible,
  rejectRequestCallback,
}) {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerTitle}>Reason for rejection</Text>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="close" size={20} color="#000000" />
            </TouchableOpacity>
          </View>
          <View style={styles.reasonCard}>
            <Text style={styles.reasonRejection}>
              Please write the reason for the rejection
            </Text>
            <View>
              <TextInput
                style={styles.textArea}
                multiline
                numberOfLines={4}
                onChangeText={setText}
                value={text}
                placeholder="Type here.."
                placeholderTextColor="#999"
              />
            </View>
          </View>
          <View style={styles.buttonCard}>
            <TouchableOpacity
              style={{width: '40%'}}
              onPress={() => navigation.navigate('PickupOrderCancelled')}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{width: '40%'}}
              onPress={() => {
                rejectRequestCallback(text);
              }}>
              <Text style={styles.okButton}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: colors.white,
    height: 350,
    width: '100%',
    borderRadius: 15,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    marginRight: '22%',
    color: colors.text,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
  okButton: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    borderRadius: 8,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    textAlign: 'center',
    color: colors.white,
  },
  textArea: {
    height: 180,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  reasonRejection: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    marginBottom: 4,
  },
  reasonCard: {
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  buttonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cancelButton: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 12,
    textAlign: 'center',
    color: colors.primary,
  },
});

export default RejectionModal;
