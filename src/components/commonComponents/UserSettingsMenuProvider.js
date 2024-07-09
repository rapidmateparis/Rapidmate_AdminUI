import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../colors';

const {Popover} = renderers;

const MyPopover = () => (
  <Menu renderer={Popover} rendererProps={{preferredPlacement: 'bottom'}}>
    <MenuTrigger style={styles.menuTrigger}>
      <SimpleLineIcons name="options-vertical" size={15} color="#131314" />
    </MenuTrigger>
    <MenuOptions style={styles.menuOptions}>
      <View>
        <TouchableOpacity style={styles.userCard}>
          <AntDesign name="eye" size={15} color="#131314" />
          <Text style={styles.optionText}>View user info</Text>
        </TouchableOpacity>

        <View style={styles.borderShowOff}/>

        <TouchableOpacity style={styles.userCard}>
          <FontAwesome name="edit" size={15} color="#131314" />
          <Text style={styles.optionText}>Update user info</Text>
        </TouchableOpacity>

        <View style={styles.borderShowOff}/>

        <TouchableOpacity style={styles.userCard}>
          <MaterialCommunityIcons name="delete" size={15} color="#131314" />
          <Text style={styles.optionText}>Remove user</Text>
        </TouchableOpacity>

        <View style={styles.borderShowOff}/>

        <TouchableOpacity style={styles.userCard}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </MenuOptions>
  </Menu>
);

const Row = () => (
  <View style={styles.row}>
    <MyPopover />
  </View>
);

const UserSettingsMenuProvider = () => (
  <MenuProvider
    style={styles.container}
    customStyles={{backdrop: styles.backdrop}}>
    <Row />
  </MenuProvider>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backdrop: {},
  menuOptions: {
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

export default UserSettingsMenuProvider;
