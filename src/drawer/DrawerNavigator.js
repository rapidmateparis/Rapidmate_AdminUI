import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomDrawer from './CustomDrawer';
import Home from '../components/Home';
import ManageLanguages from '../components/ManageLanguages';
import {colors} from '../colors';
import AllUsers from '../components/AllUsers';
import RecentlyDeletedUsers from '../components/RecentlyDeletedUsers';
import JoinRequests from '../components/JoinRequests';
import Orders from '../components/Orders';
import ManageVehicles from '../components/ManageVehicles';
import ManagePaymentMethods from '../components/ManagePaymentMethods';
import ManageAds from '../components/ManageAds';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      />
      <Drawer.Screen
        name="ManageLanguages"
        component={ManageLanguages}
        options={{
          headerShown: true,
          headerTitle: 'Manage languages',
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
          headerTintColor: colors.text,
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      />
      <Drawer.Screen
        name="ManageVehicles"
        component={ManageVehicles}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: 'Manage Vehicles',
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
          headerTintColor: colors.text,
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddNewVehicle')}
                style={styles.plusIcon}>
                <AntDesign name="plus" size={18} color={colors.white} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="AllUsers"
        component={AllUsers}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: 'All Users',
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
          headerTintColor: colors.text,
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
          headerRight: () => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <AntDesign name="filter" size={25} color={colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('CreateNewUser')}
                style={styles.plusIcon}>
                <AntDesign name="plus" size={18} color={colors.white} />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Drawer.Screen
        name="RecentlyDeletedUsers"
        component={RecentlyDeletedUsers}
        options={{
          headerShown: true,
          headerTitle: 'Recently deleted users',
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
          headerTintColor: colors.text,
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      />
      <Drawer.Screen
        name="ManageAds"
        component={ManageAds}
        options={{
          headerShown: true,
          headerTitle: 'Manage Ads',
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
          headerTintColor: colors.text,
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      />
      <Drawer.Screen
        name="JoinRequests"
        component={JoinRequests}
        options={{
          headerShown: true,
          headerTitle: 'Join Requests',
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
          headerTintColor: colors.text,
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: true,
          headerTitle: 'Order',
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
          headerTintColor: colors.text,
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <TouchableOpacity>
                <AntDesign name="filter" size={25} color={colors.primary} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="ManagePaymentMethods"
        component={ManagePaymentMethods}
        options={{
          headerShown: true,
          headerTitle: 'Manage payment methods',
          headerTitleStyle: {
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          },
          headerTintColor: colors.text,
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <TouchableOpacity>
                <AntDesign name="filter" size={25} color={colors.primary} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  plusIcon: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 25,
    marginHorizontal: 10,
  },
});

export default DrawerNavigator;
