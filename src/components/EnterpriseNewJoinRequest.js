import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import {colors} from '../colors';
import RejectionModal from './commonComponents/RejectionModal';

const EnterpriseNewJoinRequest = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = vehicleDetails => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <View>
          <View style={styles.userTypeCard}>
            <Image
              style={styles.enterpriseIcon}
              source={require('../images/EnterpriseHomeIcon.png')}
            />
            <Text style={styles.userType}>New Join Request</Text>
            <Text style={styles.userAccountType}>Enterprise</Text>
          </View>

          <View>
            <View style={styles.userdetailCard}>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Full name</Text>
                <Text style={styles.userName}>John Doe</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Email</Text>
                <Text style={styles.userName}>johndoe@email.com</Text>
              </View>
            </View>

            <View style={styles.userdetailCard}>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Password</Text>
                <Text style={styles.userName}>***********</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Phone</Text>
                <Text style={styles.userName}>+33 1 23 45 67 89</Text>
              </View>
            </View>

            <View style={styles.borderShowOff} />

            <View style={styles.userdetailCard}>
              <View style={{width: '50%'}}>
                <View>
                  <Text style={styles.userfullName}>Company name</Text>
                  <Text style={styles.userName}>Company Name</Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={styles.userfullName}>Deliveries per month</Text>
                  <Text style={styles.userName}>500</Text>
                </View>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Industry</Text>
                <Text style={styles.userName}>Industry</Text>
              </View>
            </View>

            <View style={styles.userdetailCard}>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Country</Text>
                <Text style={styles.userName}>France</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Department</Text>
                <Text style={styles.userName}>Ain</Text>
              </View>
            </View>

            <View style={styles.userdetailCard}>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Commune</Text>
                <Text style={styles.userName}>Ambérieu-en-Bugey</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>City</Text>
                <Text style={styles.userName}>Siret</Text>
              </View>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={styles.userfullName}>Projects description</Text>
              <Text style={styles.userName}>
                Lorem ipsum dolor sit amet consectetur. Consequat gravida mauris
                aenean posuere porttitor mauris dignissim. Consectetur nascetur
                porta elit sagittis facilisis.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.allBtnCards}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DeliveryboyNewJoinRequest')}
          style={[styles.logButton, {backgroundColor: colors.primary}]}>
          <Text style={styles.loginBtn}>Accept</Text>
        </TouchableOpacity>
        <View style={styles.actionBtnsCard}>
          <TouchableOpacity style={styles.ignoreBtn}>
            <Text style={styles.actionIgnore}>Ignore</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => toggleModal()}
            style={styles.rejectBtn}>
            <Text style={styles.actionReject}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Rejection Modal is here  */}
      <RejectionModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logButton: {
    width: '100%',
    marginTop: 40,
    borderRadius: 5,
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Montserrat-Medium',
  },
  enterpriseIcon: {
    width: 65,
    height: 54,
  },
  userType: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
    marginVertical: 10,
  },
  userTypeCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  userfullName: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  userName: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    marginVertical: 3,
  },
  userdetailCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  userAccountType: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    backgroundColor: '#34495E12',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  borderShowOff: {
    borderWidth: 0.2,
    borderColor: '#ccc',
    width: '100%',
    marginVertical: 20,
  },
  ignoreBtn: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: '48%',
  },
  actionIgnore: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    textAlign: 'center',
  },
  actionBtnsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  rejectBtn: {
    borderWidth: 1,
    borderColor: colors.Reject,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: '48%',
  },
  actionReject: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.Reject,
    textAlign: 'center',
  },
  allBtnCards: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5,
    marginTop: 10,
  },
});

export default EnterpriseNewJoinRequest;
