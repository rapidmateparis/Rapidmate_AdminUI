import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './normal/Splash';
import AdminLogin from './components/register/AdminLogin';
import {colors} from './colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EmployeeSignup from './components/register/EmployeeSignup';
import DrawerNavigator from './drawer/DrawerNavigator';
import ManageLanguages from './components/ManageLanguages';
import CreateNewUser from './components/CreateNewUser';
import EnterpriseNewJoinRequest from './components/EnterpriseNewJoinRequest';
import DeliveryboyNewJoinRequest from './components/DeliveryboyNewJoinRequest';
import PickupNewUserJoinRequest from './components/PickupNewUserJoinRequest';
import AllUsers from './components/AllUsers';
import RecentlyDeletedUsers from './components/RecentlyDeletedUsers';
import JoinRequests from './components/JoinRequests';
import Orders from './components/Orders';
import DeliveryDetails from './components/DeliveryDetails';
import ScheduleOverview from './components/ScheduleOverview';
import ScheduleDetails from './components/ScheduleDetails';
import ManageVehicles from './components/ManageVehicles';
import UserSettingsMenuProvider from './components/commonComponents/UserSettingsMenuProvider';
import Assigndeliveryboy from './components/Assigndeliveryboy';
import ListNewAd from './components/AddNewVehicle';
import AddNewVehicle from './components/AddNewVehicle';
import ManagePaymentMethods from './components/ManagePaymentMethods';
import PaymentMethodDetails from './components/PaymentMethodDetails';
import NewAdRequests from './components/NewAdRequests';
import ManageAds from './components/ManageAds';
import RequestAdDetails from './components/RequestAdDetails';
import AdDetails from './components/AdDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageLanguages"
          component={ManageLanguages}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="AllUsers"
          component={AllUsers}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="RecentlyDeletedUsers"
          component={RecentlyDeletedUsers}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="JoinRequests"
          component={JoinRequests}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="ManageVehicles"
          component={ManageVehicles}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="UserSettingsMenuProvider"
          component={UserSettingsMenuProvider}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="ManagePaymentMethods"
          component={ManagePaymentMethods}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="ManageAds"
          component={ManageAds}
          options={{
            headerShown: true,
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="PaymentMethodDetails"
          component={PaymentMethodDetails}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 10}}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
            ),
            headerTitle: '',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          })}
        />
        <Stack.Screen
          name="AdminLogin"
          component={AdminLogin}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 10}}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
            ),
            headerTitle: '',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          })}
        />
        <Stack.Screen
          name="EmployeeSignup"
          component={EmployeeSignup}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 10}}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
            ),
            headerTitle: '',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          })}
        />
        <Stack.Screen
          name="CreateNewUser"
          component={CreateNewUser}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 10}}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
            ),
            headerTitle: 'Create new user',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          })}
        />
        <Stack.Screen
          name="EnterpriseNewJoinRequest"
          component={EnterpriseNewJoinRequest}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 10}}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
            ),
            headerTitle: '',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          })}
        />
        <Stack.Screen
          name="DeliveryboyNewJoinRequest"
          component={DeliveryboyNewJoinRequest}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 10}}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
            ),
            headerTitle: '',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          })}
        />
        <Stack.Screen
          name="PickupNewUserJoinRequest"
          component={PickupNewUserJoinRequest}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 10}}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
            ),
            headerTitle: '',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          })}
        />
        <Stack.Screen
          name="DeliveryDetails"
          component={DeliveryDetails}
          options={{
            headerShown: true,
            headerTitle: 'Delivery Details',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
              textAlign: 'center',
            },
            headerTitleAlign: 'center',
            headerTintColor: colors.text,
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <TouchableOpacity>
                  <Feather name="download" size={25} color={colors.text} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="ScheduleOverview"
          component={ScheduleOverview}
          options={{
            headerShown: true,
            headerTitle: 'Delivery Details',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
              textAlign: 'center',
            },
            headerTitleAlign: 'center',
            headerTintColor: colors.text,
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <TouchableOpacity>
                  <Feather name="download" size={25} color={colors.text} />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="ScheduleDetails"
          component={ScheduleDetails}
          options={{
            headerShown: true,
            headerTitle: 'Schedule Details',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
              textAlign: 'center',
            },
            headerTitleAlign: 'center',
            headerTintColor: colors.text,
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="Assigndeliveryboy"
          component={Assigndeliveryboy}
          options={{
            headerShown: true,
            headerTitle: 'Assign delivery boy',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
              textAlign: 'center',
            },
            headerTitleAlign: 'center',
            headerTintColor: colors.text,
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="AddNewVehicle"
          component={AddNewVehicle}
          options={{
            headerShown: true,
            headerTitle: 'Add Vehicle',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
              textAlign: 'center',
            },
            headerTitleAlign: 'center',
            headerTintColor: colors.text,
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          }}
        />
        <Stack.Screen
          name="NewAdRequests"
          component={NewAdRequests}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 10}}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
            ),
            headerTitle: 'New Ad Requests',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          })}
        />
        <Stack.Screen
          name="AdDetails"
          component={AdDetails}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 10}}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
            ),
            headerTitle: 'New Ad Requests',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          })}
        />
        <Stack.Screen
          name="RequestAdDetails"
          component={RequestAdDetails}
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{paddingLeft: 10}}>
                <MaterialIcons
                  name="keyboard-backspace"
                  size={25}
                  color={colors.text}
                />
              </TouchableOpacity>
            ),
            headerTitle: 'Delivery Details',
            headerTitleStyle: {
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
            },
            headerTintColor: colors.text,
            headerTitleAlign: 'center',
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
