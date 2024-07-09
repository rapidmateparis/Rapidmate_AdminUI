import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {colors} from '../colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const ScheduleOverview = ({navigation}) => {
  return (
    <ScrollView style={{width: '100%', backgroundColor: '#FBFAF5'}}>
      <View style={{paddingHorizontal: 15}}>
        <View>
          <View style={styles.requesterCard}>
            <View>
              <Image
                style={styles.requesterImga}
                source={require('../images/RequesterImage.png')}
              />
            </View>

            <View style={styles.requesterInfoCard}>
              <Text style={styles.requesterName}>John Doe</Text>
              <Text style={styles.addressRequester}>Île-de-France</Text>
            </View>
            <View>
              <Text style={styles.addressRequester}>Requester</Text>
            </View>
          </View>

          <View style={styles.packageDetailCard}>
            <View style={{padding: 15}}>
              <View>
                <Text style={styles.deliveryTime}>Schedule overview:</Text>
              </View>

              <View style={styles.overViewCard}>
                <View>
                  <Text style={styles.requestOverview}>20</Text>
                  <Text style={styles.requestOverviewInfo}>Total days</Text>
                </View>

                <View>
                  <Text style={styles.requestOverview}>80</Text>
                  <Text style={styles.requestOverviewInfo}>Total hours</Text>
                </View>

                <View>
                  <Text style={styles.requestOverview}>
                    €<Text>2.3k</Text>
                  </Text>
                  <Text style={styles.requestOverviewInfo}>Aprox earning</Text>
                </View>
              </View>

              <View>
                <View style={styles.scheduleDateTimeCard}>
                  <Text style={styles.schaduleInfo}>
                    From{' '}
                    <Text style={styles.schaduleDateTime}>20-02-24, 10 AM</Text>
                  </Text>
                  <View style={styles.borderShowoff} />
                  <Text style={styles.schaduleInfo}>
                    To{' '}
                    <Text style={styles.schaduleDateTime}>20-02-24, 10 AM</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.moreDetails}>
              <Text style={styles.distance}>See details</Text>
              <TouchableOpacity onPress={() => navigation.navigate('')}>
                <AntDesign name="arrowright" size={18} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.allBtnCards}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScheduleDetails')}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  companyInfo: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  borderShowoff: {
    borderWidth: 0.5,
    borderColor: '#000',
    borderStyle: 'dashed',
    width: 15,
    marginHorizontal: 5,
  },
  borderShow: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    width: '100%',
    marginVertical: 15,
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
    width: 50,
  },
  packageDetailCard: {
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 7,
    marginTop: 7,
  },
  deliveryTime: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Montserrat-SemiBold',
  },
  overViewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  requestOverview: {
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  requestOverviewInfo: {
    color: colors.text,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  scheduleDateTimeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  schaduleInfo: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  schaduleDateTime: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  timeSlotDetails: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: colors.secondary,
  },
  moreDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#efefef',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  distance: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.primary,
  },
  requesterCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 7,
    marginTop: 7,
  },
  requesterImga: {
    height: 35,
    width: 35,
    borderRadius: 30,
  },
  requesterName: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  addressRequester: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  requesterInfoCard: {
    flex: 1,
    marginLeft: 10,
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
});

export default ScheduleOverview;
