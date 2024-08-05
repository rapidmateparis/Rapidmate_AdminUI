import React, { useState } from 'react';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { colors } from '../colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CheckBox from '@react-native-community/checkbox';
import ViewUserInfoModal from './commonComponents/ViewUserInfoModal';
import UserSettingsMenuProvider from './commonComponents/UserSettingsMenuProvider';
import ConsumerList from './allUsersPages/AllConsumers';
import DeliveryBoyList from './allUsersPages/AllDeliveryboys';
import EnterpriseList from './allUsersPages/AllEnterprises';

const Tab = createMaterialTopTabNavigator();

const { Popover } = renderers;

const MyPopover = () => (
  <Menu renderer={Popover} rendererProps={{ preferredPlacement: 'bottom' }}>
    <MenuTrigger style={styles.menuTrigger}>
      <SimpleLineIcons name="options-vertical" size={15} color="#131314" />
    </MenuTrigger>
    <MenuOptions style={styles.menuOptions}>
      <View>
        <TouchableOpacity style={styles.userCard}>
          <AntDesign name="eye" size={15} color="#131314" />
          <Text style={styles.optionText}>View user info</Text>
        </TouchableOpacity>

        <View style={styles.borderShowOff} />

        <TouchableOpacity style={styles.userCard}>
          <FontAwesome name="edit" size={15} color="#131314" />
          <Text style={styles.optionText}>Update user info</Text>
        </TouchableOpacity>

        <View style={styles.borderShowOff} />

        <TouchableOpacity style={styles.userCard}>
          <MaterialCommunityIcons name="delete" size={15} color="#131314" />
          <Text style={styles.optionText}>Remove user</Text>
        </TouchableOpacity>

        <View style={styles.borderShowOff} />

        <TouchableOpacity style={styles.userCard}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </MenuOptions>
  </Menu>
);

const Consumer = () => {
  return (
    <View style={{ flex: 1 }}>
      <ConsumerList/>
    </View>
  );
};

const DeliveryBoy = () => {
  return (
    <View style={{ flex: 1 }}>
      <DeliveryBoyList/>
    </View>
  );
};

const Enterprise = () => {
  return (
    <View style={{ flex: 1 }}>
      <EnterpriseList />
    </View>
  );
};

function AllUsers({ navigation }) {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{ flex: 1 }}>
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
          tabBarLabelStyle: { fontSize: 12, fontFamily: 'Montserrat-SemiBold' },
          tabBarIndicatorStyle: { backgroundColor: colors.primary },
          tabBarStyle: { backgroundColor: '#fff' },
        }}>
        <Tab.Screen name="Consumer" component={Consumer} />
        <Tab.Screen name="Delivery Boy">
          {() => <DeliveryBoyList navigation={navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Enterprise">
          {() => <EnterpriseList navigation={navigation} />}
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

  // ....................

  container: {
    // padding: 10,
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // backgroundColor: 'rgba(0, 0, 0, 0.05)',
    // position:"absolute",
    // left:0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuOptions: {
    height:"100%",
    zIndex:99,
  },
  menuTrigger: {
    padding: 5,
  },
  triggerText: {
    fontSize: 20,
  },
  contentText: {
    fontSize: 18,
  },
  optionText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.primary,
    marginLeft: 8,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  borderShowOff: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E5',
  },
  cancelText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.subText,
    marginLeft: 25,
  },
});

export default AllUsers;
