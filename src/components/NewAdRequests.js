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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const NewAdRequests = ({navigation}) => {
  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('RequestAdDetails')} style={styles.requesterCard}>
            <View>
              <Image
                style={styles.companyLogo}
                source={require('../images/Levis-logo.png')}
              />
            </View>

            <View style={styles.requesterInfoCard}>
              <Text style={styles.requesterName}>Company Name</Text>
              <View style={styles.vehicleDetails}>
                <EvilIcons name="location" size={18} color={colors.text} />
                <Text style={styles.addressRequester}>North Street, ABC</Text>
              </View>
              <View style={styles.companyInfo}>
                <View style={{width: '45%',}}>
                  <Text style={styles.indusrtytype}>
                    Industry:{' '}
                    <Text style={styles.indusrtyProduct}>Clothes</Text>
                  </Text>
                </View>
                <View style={{width: '45%',}}>
                  <Text style={styles.indusrtytype}>
                    Budget: <Text style={styles.indusrtyProduct}>€100.00</Text>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.requesterCard}>
            <View>
              <Image
                style={styles.companyLogo}
                source={require('../images/Subway-Logo.png')}
              />
            </View>

            <View style={styles.requesterInfoCard}>
              <Text style={styles.requesterName}>Company Name</Text>
              <View style={styles.vehicleDetails}>
                <EvilIcons name="location" size={18} color={colors.text} />
                <Text style={styles.addressRequester}>North Street, ABC</Text>
              </View>
              <View style={styles.companyInfo}>
                <View style={{width: '45%',}}>
                  <Text style={styles.indusrtytype}>
                    Industry:{' '}
                    <Text style={styles.indusrtyProduct}>Clothes</Text>
                  </Text>
                </View>
                <View style={{width: '45%',}}>
                  <Text style={styles.indusrtytype}>
                    Budget: <Text style={styles.indusrtyProduct}>€100.00</Text>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.requesterCard}>
            <View>
              <Image
                style={styles.companyLogo}
                source={require('../images/Levis-logo.png')}
              />
            </View>

            <View style={styles.requesterInfoCard}>
              <Text style={styles.requesterName}>Company Name</Text>
              <View style={styles.vehicleDetails}>
                <EvilIcons name="location" size={18} color={colors.text} />
                <Text style={styles.addressRequester}>North Street, ABC</Text>
              </View>
              <View style={styles.companyInfo}>
                <View style={{width: '45%',}}>
                  <Text style={styles.indusrtytype}>
                    Industry:{' '}
                    <Text style={styles.indusrtyProduct}>Clothes</Text>
                  </Text>
                </View>
                <View style={{width: '45%',}}>
                  <Text style={styles.indusrtytype}>
                    Budget: <Text style={styles.indusrtyProduct}>€100.00</Text>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.requesterCard}>
            <View>
              <Image
                style={styles.companyLogo}
                source={require('../images/Subway-Logo.png')}
              />
            </View>

            <View style={styles.requesterInfoCard}>
              <Text style={styles.requesterName}>Company Name</Text>
              <View style={styles.vehicleDetails}>
                <EvilIcons name="location" size={18} color={colors.text} />
                <Text style={styles.addressRequester}>North Street, ABC</Text>
              </View>
              <View style={styles.companyInfo}>
                <View style={{width: '45%',}}>
                  <Text style={styles.indusrtytype}>
                    Industry:{' '}
                    <Text style={styles.indusrtyProduct}>Clothes</Text>
                  </Text>
                </View>
                <View style={{width: '45%',}}>
                  <Text style={styles.indusrtytype}>
                    Budget: <Text style={styles.indusrtyProduct}>€100.00</Text>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  cycleImage: {
    width: 52,
    height: 61,
  },
  scooterImage: {
    width: 45,
    height: 51,
  },
  carImage: {
    width: 64,
    height: 26,
  },
  vanImage: {
    width: 65,
    height: 28,
  },
  pickupImage: {
    width: 63,
    height: 41,
  },
  truckImage: {
    width: 64,
    height: 28,
  },
  packageImage: {
    width: 37,
    height: 37,
  },
  availableStatus: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.Crimson,
    backgroundColor: '#FF005812',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginLeft: 10,
  },
  vehicleDetails: {
    flexDirection: 'row',
    marginTop: 5,
  },
  notAvailableStatus: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.primary,
    backgroundColor: '#1D374E12',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginLeft: 10,
  },
  indusrtytype: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  indusrtyProduct: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  companyInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  companyLogo: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});

export default NewAdRequests;
