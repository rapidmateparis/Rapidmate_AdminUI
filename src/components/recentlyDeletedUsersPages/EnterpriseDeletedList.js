import React, {useState} from 'react';
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
import {colors} from '../../colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CheckBox from '@react-native-community/checkbox';
import ViewUserInfoModal from '../commonComponents/ViewUserInfoModal';
import UserSettingsMenuProvider from '../commonComponents/UserSettingsMenuProvider';

const { Popover } = renderers;

const EnterpriseDeletedList = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = vehicleDetails => {
    setModalVisible(!isModalVisible);
  };
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [toggleCheckBoxUser, setToggleCheckBoxUser] = useState(false);
  const [usersCheck, setUsersCheck] = useState(users);

  const toggleCheckBox = index => {
    const newUsers = [...usersCheck];
    newUsers[index].checked = !newUsers[index].checked;
    setUsersCheck(newUsers);
  };

  const users = [
    { id:1, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:2, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:3, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:4, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:5, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:6, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:7, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:8, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:9, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:10, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:11, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:12, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:13, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
    { id:14, name: 'Zoe Wright', email: 'zoew@email.com', date: '12-02-23', checked: false },
  ];

  const UserInfoCard = ({item, toggleCheckBox, isChecked}) => {
    return (
      <View style={styles.userInfoCard}>
        <View style={{width: '10%'}}>
          <CheckBox
            disabled={false}
            value={isChecked}
            onValueChange={toggleCheckBox}
            style={{alignSelf: 'flex-start'}}
            tintColors={{true: '#1D374E', false: '#000000'}}
          />
        </View>
        <View style={{width: '30%'}}>
          <Text style={styles.userMainHeadings}>{item.name}</Text>
        </View>
        <View style={{width: '35%'}}>
          <Text style={styles.userMainHeadings}>{item.email}</Text>
        </View>
        <View style={{width: '20%'}}>
          <Text style={styles.userMainHeadings}>{item.date}</Text>
        </View>
        <View style={{width: '5%'}}>
          <Menu
            renderer={Popover}
            rendererProps={{
              preferredPlacement: 'top',
              anchorStyle: {backgroundColor: '#fff', top: -82},
              // arrowStyle: styles.arrow,
              arrow: false,
            }}>
            <MenuTrigger style={styles.menuTrigger}>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </MenuTrigger>
            <MenuOptions customStyles={{optionsContainer: styles.menuOptions}}>
              <View style={styles.borderShowOff} />
              <TouchableOpacity
                style={styles.userCard}
                onPress={() => alert('User Removed')}>
                <MaterialCommunityIcons
                  name="delete"
                  size={15}
                  color="#131314"
                />
                <Text style={styles.optionText}>Remove user</Text>
              </TouchableOpacity>
              <View style={styles.borderShowOff} />
              <TouchableOpacity
                style={styles.userCard}
                onPress={() => alert('Cancel')}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </MenuOptions>
          </Menu>
        </View>
      </View>
    );
  };

  const renderItem = ({item, index}) => (
    <UserInfoCard
      item={item}
      toggleCheckBox={() => toggleCheckBox(index)}
      isChecked={item.checked}
    />
  );

  return (
    <ScrollView style={{width: '100%', height: '100%'}}>
      <View>
        <View style={styles.listHeader}>
          <View style={styles.listCardMain}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxMain}
                onValueChange={newValue => setToggleCheckBoxMain(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userHeadings}>Name</Text>
            </View>
            <View style={{width: '35%'}}>
              <Text style={styles.userHeadings}>Email</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userHeadings}>Join date</Text>
            </View>
            <View style={{width: '5%'}} />
          </View>
        </View>
        <MenuProvider>
          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{paddingHorizontal: 10}}
          />
        </MenuProvider>
      </View>
    </ScrollView>
  );
};

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

export default EnterpriseDeletedList;
