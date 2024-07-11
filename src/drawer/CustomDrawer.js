import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../colors';

const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.adminProfileCard}>
          <Image
            style={styles.adminProfile}
            source={require('../images/AdminProfile.png')}
          />
          <View style={styles.adminInfoCard}>
            <Text style={styles.adminName}>John Doe</Text>
            <Text style={styles.accountType}>Admin panel</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.closeDrawer();
            }}>
            <MaterialCommunityIcons
              name="location-exit"
              size={20}
              color={colors.text}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 20,
            borderTopWidth: 0.2,
            borderTopColor: '#C7C7C7',
            paddingHorizontal: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 15, height: 15}}
                source={require('../images/homeIcon.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Home</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 17, height: 17}}
                source={require('../images/OrdersIcon.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Orders</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AllUsers')}>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 21, height: 21}}
                source={require('../images/UsersIcon.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Users</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('RecentlyDeletedUsers')}>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 20, height: 15,}}
                source={require('../images/deletedUsers.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Recently deleted users</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('JoinRequests')}>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 18, height: 14}}
                source={require('../images/RequestsToJoin.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Requests to join</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ManageVehicles')}>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 18, height: 18.8}}
                source={require('../images/ManageVehicles.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Manage vehicles</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ManageAds')}>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 15, height: 14}}
                source={require('../images/ManageadsIcon.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Manage Ads</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ManagePaymentMethods')}>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 18, height: 14}}
                source={require('../images/paymentCardIcon.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Manage payment cards</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 16, height: 15}}
                source={require('../images/TransactionsIcon.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Manage Transactions</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ManageLanguages')}>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 15, height: 21}}
                source={require('../images/languagesIcon.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Manage languages</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.pagesCard}>
              <Image
                style={{width: 17, height: 16}}
                source={require('../images/supportIcon.png')}
              />
              <View style={styles.pageNameCard}>
                <Text style={styles.pageName}>Support Requests</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  adminProfile: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  adminName: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: colors.text,
  },
  accountType: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  adminProfileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  adminInfoCard: {
    flex: 1,
    paddingLeft: 5,
  },
  pageName: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  pagesCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  pageNameCard: {
    paddingLeft: 15,
  },
});

export default CustomDrawer;
