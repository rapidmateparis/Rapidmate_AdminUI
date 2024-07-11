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

const Tab = createMaterialTopTabNavigator();

const NewList = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = vehicleDetails => {
    setModalVisible(!isModalVisible);
  };
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [toggleCheckBoxUser, setToggleCheckBoxUser] = useState(false);

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <TouchableOpacity onPress={() => navigation.navigate('EnterpriseNewJoinRequest')} style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.enterpriseImga}
              source={require('../images/EnterpriseHomeIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.enterpriseType}>Enterprise</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.pendingText}>Pending</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PickupNewUserJoinRequest')} style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.pickupImga}
              source={require('../images/PickupImage.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.pickupType}>Pickup & Dropoff</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.pendingText}>Pending</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PickupNewUserJoinRequest')} style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.pickupImga}
              source={require('../images/PickupImage.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.pickupType}>Pickup & Dropoff</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.pendingText}>Pending</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('DeliveryboyNewJoinRequest')}  style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.deliveryboyImga}
              source={require('../images/DeliveryboyIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.deliveryboyType}>Delivery Boy</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.pendingText}>Pending</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.enterpriseImga}
              source={require('../images/EnterpriseHomeIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.enterpriseType}>Enterprise</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.pendingText}>Pending</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.enterpriseImga}
              source={require('../images/EnterpriseHomeIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.enterpriseType}>Enterprise</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.pendingText}>Pending</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const AcceptedList = ({navigation}) => {
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [toggleCheckBoxUser, setToggleCheckBoxUser] = useState(false);

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.enterpriseImga}
              source={require('../images/EnterpriseHomeIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.enterpriseType}>Enterprise</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.acceptedText}>Accepted</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.pickupImga}
              source={require('../images/PickupImage.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.pickupType}>Pickup & Dropoff</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.acceptedText}>Accepted</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.pickupImga}
              source={require('../images/PickupImage.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.pickupType}>Pickup & Dropoff</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.acceptedText}>Accepted</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.deliveryboyImga}
              source={require('../images/DeliveryboyIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.deliveryboyType}>Delivery Boy</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.acceptedText}>Accepted</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.enterpriseImga}
              source={require('../images/EnterpriseHomeIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.enterpriseType}>Enterprise</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.acceptedText}>Accepted</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.enterpriseImga}
              source={require('../images/EnterpriseHomeIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.enterpriseType}>Enterprise</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.acceptedText}>Accepted</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const RejectedList = ({navigation}) => {
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [toggleCheckBoxUser, setToggleCheckBoxUser] = useState(false);

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.enterpriseImga}
              source={require('../images/EnterpriseHomeIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.enterpriseType}>Enterprise</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.rejectedText}>Rejected</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.pickupImga}
              source={require('../images/PickupImage.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.pickupType}>Pickup & Dropoff</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.rejectedText}>Rejected</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.pickupImga}
              source={require('../images/PickupImage.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.pickupType}>Pickup & Dropoff</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.rejectedText}>Rejected</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.deliveryboyImga}
              source={require('../images/DeliveryboyIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.deliveryboyType}>Delivery Boy</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.rejectedText}>Rejected</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.enterpriseImga}
              source={require('../images/EnterpriseHomeIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.enterpriseType}>Enterprise</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.rejectedText}>Rejected</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>

        <View style={styles.mainCard}>
          <View style={{width: '10%'}}>
            <Image
              style={styles.enterpriseImga}
              source={require('../images/EnterpriseHomeIcon.png')}
            />
          </View>
          <View style={{marginLeft: 10, width: '85%'}}>
            <View style={styles.statusName}>
              <View style={styles.nameCard}>
                <Text style={styles.userName}>John Doe</Text>
                <Text style={styles.userEmail}>johndoe@email.com</Text>
              </View>
              <View>
                <Text style={styles.enterpriseType}>Enterprise</Text>
              </View>
            </View>
            <View style={styles.statusCard}>
              <Text style={styles.accountStatus}>
                Status: <Text style={styles.rejectedText}>Rejected</Text>
              </Text>
              <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const New = () => {
  return (
    <View style={{flex: 1}}>
      <NewList />
    </View>
  );
};

const Accepted = () => {
  return (
    <View style={{flex: 1}}>
      <AcceptedList />
    </View>
  );
};

const Rejected = () => {
  return (
    <View style={{flex: 1}}>
      <RejectedList />
    </View>
  );
};

function JoinRequests({navigation}) {
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
            placeholder="Search order by ID"
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
        <Tab.Screen name="New">
          {() => <NewList navigation={navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Accepted">
          {() => <AcceptedList navigation={navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Rejected">
          {() => <RejectedList navigation={navigation} />}
        </Tab.Screen>
      </Tab.Navigator>
      {/* End of Tab Navigator */}
    </View>
  );
}

const styles = StyleSheet.create({
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
  mainCard: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginVertical: 8,
  },
  enterpriseImga: {
    width: 32,
    height: 28,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  userEmail: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  enterpriseType: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.primary,
    backgroundColor: '#34495E12',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
  },
  accountStatus: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  pendingText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.primary,
  },
  dateTime: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  statusName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  pickupImga: {
    width: 27,
    height: 29,
  },
  pickupType: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.Crimson,
    backgroundColor: '#FF005812',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
  },
  deliveryboyImga: {
    width: 24,
    height: 36,
  },
  deliveryboyType: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.Pending,
    backgroundColor: '#F39C1212',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
  },
  acceptedText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.Completed,
  },
  rejectedText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.Reject,
  },
});

export default JoinRequests;
