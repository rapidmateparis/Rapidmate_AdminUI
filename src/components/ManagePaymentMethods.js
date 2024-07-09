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
import {MenuProvider} from 'react-native-popup-menu';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CheckBox from '@react-native-community/checkbox';
import ViewUserInfoModal from './commonComponents/ViewUserInfoModal';
import {UserSettingsMenuProvider} from './commonComponents/UserSettingsMenuProvider';

const ManagePaymentMethods = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [toggleCheckBoxUser, setToggleCheckBoxUser] = useState(false);

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
            placeholder="Search by card number or user name"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>
      <View style={{backgroundColor: '#FFFFFF',}}>
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
            <View style={{width: '20%'}}>
              <Text style={styles.userHeadings}>Card</Text>
            </View>
            <View style={{width: '25%'}}>
              <Text style={styles.userHeadings}>Provider</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userHeadings}>Status</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userHeadings}>Expiry</Text>
            </View>
            <View style={{width: '5%'}} />
          </View>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.cardNumber}>** 4567</Text>
            </View>
            <View style={{width: '25%'}}>
              <Image style={styles.cardImage} source={require('../images/logos_mastercard.png')} />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.activate}>Active</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>04-28</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity onPress={() => navigation.navigate('PaymentMethodDetails')}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.cardNumber}>** 4567</Text>
            </View>
            <View style={{width: '25%'}}>
              <Image style={styles.cardImage} source={require('../images/logos_mastercard.png')} />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.inactive}>Inactive</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>04-28</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.cardNumber}>** 4567</Text>
            </View>
            <View style={{width: '25%'}}>
              <Image style={styles.cardImage} source={require('../images/logos_mastercard.png')} />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>Active</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>04-28</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.cardNumber}>** 4567</Text>
            </View>
            <View style={{width: '25%'}}>
              <Image style={styles.cardImage} source={require('../images/logos_mastercard.png')} />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.inactive}>Inactive</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>04-28</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.cardNumber}>** 4567</Text>
            </View>
            <View style={{width: '25%'}}>
              <Image style={styles.cardImage} source={require('../images/logos_mastercard.png')} />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.inactive}>Inactive</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>04-28</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.cardNumber}>** 4567</Text>
            </View>
            <View style={{width: '25%'}}>
              <Image style={styles.cardImage} source={require('../images/logos_mastercard.png')} />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>Active</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>04-28</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.cardNumber}>** 4567</Text>
            </View>
            <View style={{width: '25%'}}>
              <Image style={styles.cardImage} source={require('../images/logos_mastercard.png')} />
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>Active</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>04-28</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
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
    marginBottom: 15,
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
  cardImage: {
    width: 27,
    height: 17,
  },
  cardNumber: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold', 
    color: colors.text,
  },
  activate: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',  
    color: colors.text,
  },
  inactive: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',  
    color: colors.Reject,
  },
});

export default ManagePaymentMethods;
