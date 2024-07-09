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

function ViewUserInfoModal({setModalVisible, isModalVisible}) {
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
            <TouchableOpacity style={styles.closeBtn} onPress={toggleModal}>
              <AntDesign name="close" size={20} color="#000000" />
            </TouchableOpacity>
          </View>
          <View style={styles.reasonCard}>
            <View style={styles.userMainCard}>
              <Text style={styles.headerTitle}>John Doe</Text>
              <Text style={styles.userMail}>johndoe@email.com</Text>
            </View>
            <View>
                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Full name</Text>
                    <Text style={styles.userInformation}>John Doe</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Email</Text>
                    <Text style={styles.userInformation}>johndoe@email.com</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Password</Text>
                    <Text style={styles.userInformation}>D5SF44G56DFG</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Role</Text>
                    <Text style={styles.userInformation}>Enterprise</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Phone</Text>
                    <Text style={styles.userInformation}>+33123456789</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Company</Text>
                    <Text style={styles.userInformation}>Company Name</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Industry</Text>
                    <Text style={styles.userInformation}>Industry</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Deliveries/hours per month</Text>
                    <Text style={styles.userInformation}>50</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Country</Text>
                    <Text style={styles.userInformation}>France</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Department</Text>
                    <Text style={styles.userInformation}>Ain</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>Commune</Text>
                    <Text style={styles.userInformation}>Ambérieu-en-Bugey</Text>
                </View>

                <View style={styles.userInfoCard}>
                    <Text style={styles.userStatus}>City</Text>
                    <Text style={styles.userInformation}>Siret</Text>
                </View>
                
            </View>
          </View>
          <View style={styles.buttonCard}>
            <TouchableOpacity
              style={{width: '40%'}}
              onPress={() => navigation.navigate('PickupOrderCancelled')}>
              <Text style={styles.cancelButton}>Remove User</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{width: '40%'}}
              onPress={() => navigation.navigate('PickupOrderCancelled')}>
              <Text style={styles.okButton}>Update user info</Text>
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
    height: 450,
    width: '100%',
    borderRadius: 15,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: colors.text,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
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
    marginBottom: 30,
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
    borderColor: colors.Reject,
    paddingVertical: 12,
    textAlign: 'center',
    color: colors.Reject,
  },
  closeBtn: {
    marginTop: 10,
  },
  userMail: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
    textAlign: 'center',
  },
  userStatus: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.primary,
  },
  userInformation: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium', 
    color: colors.primary,
  },
  userInfoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  userMainCard: {
    marginBottom: 20,
  },
});

export default ViewUserInfoModal;
