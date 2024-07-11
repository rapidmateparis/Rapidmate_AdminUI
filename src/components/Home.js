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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../colors';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.welcomeHome}>
          <View>
            <Text style={styles.userName}>26 August, 2024</Text>
            <Text style={styles.aboutPage}>Rapidmate admin panel</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <EvilIcons name="bell" size={40} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.allInformatinCard}>
          <View style={styles.informatinMainCard}>
            <View style={styles.informatinCard}>
              <Text style={styles.informationText}>Total Consumers</Text>
              <TouchableOpacity>
                <Image
                  style={styles.infoBtnImage}
                  source={require('../images/Info-Cricle.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.bookingsInfo}>08</Text>
          </View>

          <View style={styles.informatinMainCard}>
            <View style={styles.informatinCard}>
              <Text style={[styles.informationText, {paddingRight: 10}]}>
                Total Delivery boys
              </Text>
              <TouchableOpacity>
                <Image
                  style={styles.infoBtnImage}
                  source={require('../images/Info-Cricle.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.bookingsInfo}>52</Text>
          </View>

          <View style={styles.informatinMainCard}>
            <View style={styles.informatinCard}>
              <Text style={[styles.informationText, {paddingRight: 18}]}>
                Total Enterprises
              </Text>
              <TouchableOpacity>
                <Image
                  style={styles.infoBtnImage}
                  source={require('../images/Info-Cricle.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.bookingsInfo}>362</Text>
          </View>
        </View>

        <View style={styles.allInformatinCard}>
          <View style={styles.informatinMainCard}>
            <View style={styles.informatinCard}>
              <Text style={[styles.informationText, {paddingRight: 18}]}>
                Total Orders
              </Text>
              <TouchableOpacity>
                <Image
                  style={styles.infoBtnImage}
                  source={require('../images/Info-Cricle.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.bookingsInfo}>12k</Text>
          </View>

          <View style={styles.informatinMainCard}>
            <View style={styles.informatinCard}>
              <Text style={[styles.informationText, {paddingRight: 0}]}>
                Completed Orders
              </Text>
              <TouchableOpacity>
                <Image
                  style={styles.infoBtnImage}
                  source={require('../images/Info-Cricle.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.bookingsInfo}>11.5k</Text>
          </View>

          <View style={styles.informatinMainCard}>
            <View style={styles.informatinCard}>
              <Text style={styles.informationText}>Canceled Orders</Text>
              <TouchableOpacity>
                <Image
                  style={styles.infoBtnImage}
                  source={require('../images/Info-Cricle.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.bookingsInfo}>486</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('JoinRequests')}>
            <LinearGradient
              colors={['rgba(239, 176, 61, 0)', 'rgba(239, 176, 61, 0.08)']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={styles.container}>
              <View style={styles.requestCard}>
                <Image
                  style={styles.requestImages}
                  source={require('../images/requestIcon.png')}
                />
                <View style={styles.statusCard}>
                  <Text style={styles.requestCount}>12 new requests</Text>
                  <Text style={styles.missedConnections}>
                    You recently missed 10 connections
                  </Text>
                </View>
                <View>
                  <AntDesign name="arrowright" size={20} color={colors.text} />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
            <View style={styles.profileCard}>
              <Image
                style={{width: 19, height: 23}}
                source={require('../images/ManageOrder.png')}
              />
              <View style={styles.statusCard}>
                <Text style={styles.requestCount}>Manage delivery orders</Text>
              </View>
              <View>
                <AntDesign name="arrowright" size={20} color={colors.text} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ManageAds')}>
            <View style={styles.profileCard}>
              <Image
                style={{width: 22, height: 19}}
                source={require('../images/manageAds.png')}
              />
              <View style={styles.statusCard}>
                <Text style={styles.requestCount}>Manage Ads</Text>
              </View>
              <View>
                <AntDesign name="arrowright" size={20} color={colors.text} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.profileCard}>
              <Image
                style={{width: 23, height: 17}}
                source={require('../images/managePayment.png')}
              />
              <View style={styles.statusCard}>
                <Text style={styles.requestCount}>Manage Payments & Transactions</Text>
              </View>
              <View>
                <AntDesign name="arrowright" size={20} color={colors.text} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.profileCard}>
              <Image
                style={{width: 20, height: 22}}
                source={require('../images/manageShcedule.png')}
              />
              <View style={styles.statusCard}>
                <Text style={styles.requestCount}>Manage Schedules</Text>
              </View>
              <View>
                <AntDesign name="arrowright" size={20} color={colors.text} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  informatinMainCard: {
    width: '32%',
    backgroundColor: colors.white,
    padding: 13,
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
    marginRight: 10,
  },
  informatinCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  allInformatinCard: {
    flexDirection: 'row',
  },
  informationText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  bookingsInfo: {
    fontSize: 30,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  welcomeHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  userWelcome: {
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  userName: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: colors.text,
  },
  aboutPage: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  Location: {
    color: colors.text,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  requestPickup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 18,
    borderRadius: 10,
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
    marginRight: 10,
  },
  franchiseCard: {
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 18,
    borderRadius: 10,
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
    marginRight: 10,
  },
  infoBtnImage: {
    width: 10,
    height: 10,
  },
  container: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  requestImages: {
    width: 20,
    height: 21,
  },
  requestCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 70,
  },
  requestCount: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  missedConnections: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
    marginTop: 3,
  },
  statusCard: {
    flex: 1,
    paddingLeft: 10,
  },
  profileCard: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 70,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 10,
  },
});

export default Home;
