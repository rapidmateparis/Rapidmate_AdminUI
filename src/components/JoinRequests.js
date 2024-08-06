import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CheckBox from '@react-native-community/checkbox';
import ViewUserInfoModal from './commonComponents/ViewUserInfoModal';
import {getAllJoinRequest} from '../data_manager';
import {useLoader} from '../utils/loaderContext';
import {FlatList} from 'react-native-gesture-handler';
import moment from 'moment';
import {useFocusEffect} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const NewList = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const {setLoading} = useLoader();
  const toggleModal = vehicleDetails => {
    setModalVisible(!isModalVisible);
  };
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [toggleCheckBoxUser, setToggleCheckBoxUser] = useState(false);

  const [joinRequestDeliveryBoyList, setJoinRequestDeliveryBoyList] = useState(
    [],
  );
  const [joinRequestEnterPriseList, setJoinRequestEnterPriseList] = useState(
    [],
  );

  useFocusEffect(
    useCallback(() => {
      let deliveryBoyParams = {
        role: 'DELIVERY_BOY',
        status: 'PENDING',
      };
      let enterPriseParams = {
        role: 'ENTERPRISE',
        status: 'PENDING',
      };
      getJoinRequest({
        params: deliveryBoyParams,
        userRole: deliveryBoyParams.role,
      });
      getJoinRequest({
        params: enterPriseParams,
        userRole: enterPriseParams.role,
      });

      return () => {
        setJoinRequestDeliveryBoyList([]);
        setJoinRequestEnterPriseList([]);
      };
    }, []),
  );

  const getJoinRequest = ({params, userRole}) => {
    getAllJoinRequest(
      params,
      successResponse => {
        if (successResponse[0]._success) {
          setLoading(false);
          if (successResponse[0]._response) {
            if (userRole == 'DELIVERY_BOY') {
              setJoinRequestDeliveryBoyList(successResponse[0]._response);
            } else if (userRole == 'ENTERPRISE') {
              setJoinRequestEnterPriseList(successResponse[0]._response);
            }
            navigation.navigate('MainScreen');
          }
        }
      },
      errorResponse => {
        setLoading(false);
        Alert.alert('Error Alert', errorResponse[0]._errors.message, [
          {text: 'OK', onPress: () => {}},
        ]);
      },
    );
  };

  const getProfile = profile => {
    let userProfile = profile.charAt(0);
    if (userProfile == 'D') {
      return <Text style={styles.deliveryboyType}>Delivery Boy</Text>;
    } else if (userProfile == 'E') {
      return <Text style={styles.enterpriseType}>Enterprise</Text>;
    } else {
      return <Text style={styles.pickupType}>Pickup & Dropoff</Text>;
    }
  };

  const navigateTo = item => {
    let userProfile = item.ext_id.charAt(0);
    if (userProfile == 'D') {
      navigation.navigate('DeliveryboyNewJoinRequest', {requestItem: item});
    } else if (userProfile == 'E') {
      navigation.navigate('EnterpriseNewJoinRequest', {requestItem: item});
    } else {
      navigation.navigate('PickupNewUserJoinRequest', {requestItem: item});
    }
  };

  const joinRequestRender = ({item}) => (
    <View style={{paddingHorizontal: 15}}>
      <TouchableOpacity
        onPress={() => {
          navigateTo(item);
        }}
        style={styles.mainCard}>
        <View style={{width: '10%'}}>
          <Image
            style={styles.enterpriseImga}
            source={require('../images/EnterpriseHomeIcon.png')}
          />
        </View>
        <View style={{marginLeft: 10, width: '85%'}}>
          <View style={styles.statusName}>
            <View style={styles.nameCard}>
              <Text style={styles.userName}>
                {item.first_name + ' ' + item.last_name}
              </Text>
              <Text style={styles.userEmail}>{item.email}</Text>
            </View>
            <View>{getProfile(item.ext_id)}</View>
          </View>
          <View style={styles.statusCard}>
            <Text style={styles.accountStatus}>
              Status: <Text style={styles.pendingText}>Pending</Text>
            </Text>
            <Text style={styles.dateTime}>26-03-24 | 10:30 AM</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#F9FBFD'}}>
      <FlatList
        data={[...joinRequestDeliveryBoyList, ...joinRequestEnterPriseList]}
        renderItem={joinRequestRender}
      />
    </View>
  );
};

const AcceptedList = ({navigation}) => {
  const {setLoading} = useLoader();
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [toggleCheckBoxUser, setToggleCheckBoxUser] = useState(false);

  const [acceptDeliveryBoyList, setAcceptDeliveryBoyList] = useState([]);
  const [acceptEnterPriseList, setAcceptEnterPriseList] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let deliveryBoyParams = {
        role: 'DELIVERY_BOY',
        status: 'ACCEPTED',
      };
      let enterPriseParams = {
        role: 'ENTERPRISE',
        status: 'ACCEPTED',
      };
      getJoinRequest({
        params: deliveryBoyParams,
        userRole: deliveryBoyParams.role,
      });
      getJoinRequest({
        params: enterPriseParams,
        userRole: enterPriseParams.role,
      });

      return () => {
        setAcceptDeliveryBoyList([]);
        setAcceptEnterPriseList([]);
      };
    }, []),
  );

  const getJoinRequest = ({params, userRole}) => {
    getAllJoinRequest(
      params,
      successResponse => {
        if (successResponse[0]._success) {
          setLoading(false);
          if (successResponse[0]._response) {
            if (userRole == 'DELIVERY_BOY') {
              setAcceptDeliveryBoyList(successResponse[0]._response);
            } else if (userRole == 'ENTERPRISE') {
              setAcceptEnterPriseList(successResponse[0]._response);
            }
            navigation.navigate('MainScreen');
          }
        }
      },
      errorResponse => {
        setLoading(false);
      },
    );
  };

  const getProfile = profile => {
    let userProfile = profile.charAt(0);
    if (userProfile == 'D') {
      return <Text style={styles.deliveryboyType}>Delivery Boy</Text>;
    } else if (userProfile == 'E') {
      return <Text style={styles.enterpriseType}>Enterprise</Text>;
    } else {
      return <Text style={styles.pickupType}>Pickup & Dropoff</Text>;
    }
  };

  const acceptRequestRender = acceptRequestItem => (
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
              <Text style={styles.userName}>
                {acceptRequestItem.item.first_name +
                  ' ' +
                  acceptRequestItem.item.last_name}
              </Text>
              <Text style={styles.userEmail}>
                {acceptRequestItem.item.email}
              </Text>
            </View>
            <View>
              <Text style={styles.enterpriseType}>
                {getProfile(acceptRequestItem.item.ext_id)}
              </Text>
            </View>
          </View>
          <View style={styles.statusCard}>
            <Text style={styles.accountStatus}>
              Status: <Text style={styles.acceptedText}>Accepted</Text>
            </Text>
            <Text style={styles.dateTime}>
              {moment(acceptRequestItem.item.updated_on).format('YYYY-MM-DD')} |{' '}
              {moment(acceptRequestItem.item.updated_on).format('hh:mm a')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <FlatList
        data={[...acceptDeliveryBoyList, ...acceptEnterPriseList]}
        renderItem={acceptRequestRender}
      />
    </View>
  );
};

const RejectedList = ({navigation}) => {
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [toggleCheckBoxUser, setToggleCheckBoxUser] = useState(false);
  const {setLoading} = useLoader();

  const [rejectedDeliveryBoyList, setRejectedDeliveryBoyList] = useState([]);
  const [rejectedEnterPriseList, setRejectedEnterPriseList] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let deliveryBoyParams = {
        role: 'DELIVERY_BOY',
        status: 'REJECTED',
      };
      let enterPriseParams = {
        role: 'ENTERPRISE',
        status: 'REJECTED',
      };
      getJoinRequest({
        params: deliveryBoyParams,
        userRole: deliveryBoyParams.role,
      });
      getJoinRequest({
        params: enterPriseParams,
        userRole: enterPriseParams.role,
      });

      return () => {
        setRejectedDeliveryBoyList([]);
        setRejectedEnterPriseList([]);
      };
    }, []),
  );

  const getJoinRequest = ({params, userRole}) => {
    getAllJoinRequest(
      params,
      successResponse => {
        if (successResponse[0]._success) {
          setLoading(false);
          if (successResponse[0]._response) {
            if (userRole == 'DELIVERY_BOY') {
              setRejectedDeliveryBoyList(successResponse[0]._response);
            } else if (userRole == 'ENTERPRISE') {
              setRejectedEnterPriseList(successResponse[0]._response);
            }
            navigation.navigate('MainScreen');
          }
        }
      },
      errorResponse => {
        setLoading(false);
      },
    );
  };

  const getProfile = profile => {
    let userProfile = profile.charAt(0);
    if (userProfile == 'D') {
      return <Text style={styles.deliveryboyType}>Delivery Boy</Text>;
    } else if (userProfile == 'E') {
      return <Text style={styles.enterpriseType}>Enterprise</Text>;
    } else {
      return <Text style={styles.pickupType}>Pickup & Dropoff</Text>;
    }
  };

  const rejectRequestRender = rejectedItem => (
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
            <Text style={styles.userName}>
              {rejectedItem.item.first_name + ' ' + rejectedItem.item.last_name}
            </Text>
            <Text style={styles.userEmail}>{rejectedItem.item.email}</Text>
          </View>
          <View>
            <Text style={styles.enterpriseType}>
              {getProfile(rejectedItem.item.ext_id)}
            </Text>
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
  );

  return (
    <View style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <FlatList
        data={[...rejectedDeliveryBoyList, ...rejectedEnterPriseList]}
        renderItem={rejectRequestRender}
      />
    </View>
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
