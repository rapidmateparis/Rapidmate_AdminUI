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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CheckBox from '@react-native-community/checkbox';
import ViewUserInfoModal from './commonComponents/ViewUserInfoModal';
import ConsumersDeletedList from './recentlyDeletedUsersPages/ConsumersDeletedList';
import DeliveryboyDeletedList from './recentlyDeletedUsersPages/DeliveryboyDeletedList';
import EnterpriseDeletedList from './recentlyDeletedUsersPages/EnterpriseDeletedList';

const Tab = createMaterialTopTabNavigator();

const Consumer = () => {
  return (
    <View style={{flex: 1}}>
      <ConsumersDeletedList/>
    </View>
  );
};

const DeliveryBoy = () => {
  return (
    <View style={{flex: 1}}>
      <DeliveryboyDeletedList />
    </View>
  );
};

const Enterprise = () => {
  return (
    <View style={{flex: 1}}>
      <EnterpriseDeletedList />
    </View>
  );
};

function RecentlyDeletedUsers({navigation}) {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 5,
          backgroundColor: '#FFFFFF',
        }}>
        {/* Your Search Bar */}
        <View style={styles.searchContainer}>
          <AntDesign
            name="search1"
            size={20}
            color="#000"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchinput}
            placeholder="Search users"
            placeholderTextColor={colors.text}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* End of Search Bar */}
      </View>

      {/* Tab Navigator */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.subText,
          tabBarLabelStyle: {fontSize: 12, fontFamily: 'Montserrat-SemiBold'},
          tabBarIndicatorStyle: {backgroundColor: colors.primary},
          tabBarStyle: {backgroundColor: '#fff'},
        }}>
        <Tab.Screen name="Consumer" component={Consumer} />
        <Tab.Screen name="Delivery Boy">
          {() => <DeliveryboyDeletedList navigation={navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Enterprise">
          {() => <EnterpriseDeletedList navigation={navigation} />}
        </Tab.Screen>
      </Tab.Navigator>
      {/* End of Tab Navigator */}
    </View>
  );
}

const styles = StyleSheet.create({
  bookAddress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 14,
    flex: 1,
    color: colors.text,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 10,
  },
  countyFlags: {
    width: 30,
    height: 30,
  },
  countyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchinput: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  listHeader: {
    backgroundColor: '#1D374E12',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  listCardMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userHeadings: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.subText,
  },
  userInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  userMainHeadings: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
});

export default RecentlyDeletedUsers;
