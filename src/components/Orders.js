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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const OngoingList = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [index, setIndex] = useState(0);
  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 5,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('DeliveryDetails')} style={styles.packageDetailCard}>
            <View style={styles.packageHeader}>
              <Image
                style={styles.packageImgaes}
                source={require('../images/PackageIcon.png')}
              />
              <Text style={styles.deliveryTime}>
                Delivered on Apr 19, 2024 at 11:30 AM
              </Text>
            </View>

            <View style={styles.packageMiddle}>
              <Ionicons name="location-outline" size={15} color="#717172" />
              <Text style={styles.fromLocation}>
                From <Text style={styles.Location}>North Street, ABC</Text>
              </Text>
            </View>

            <View style={styles.packageMiddle}>
              <MaterialIcons name="my-location" size={15} color="#717172" />
              <Text style={styles.fromLocation}>
                To <Text style={styles.Location}>To 5th Avenue, XYZ</Text>
              </Text>
            </View>

            <View style={styles.borderShow}></View>

            <View style={styles.orderIdCard}>
              <Text style={styles.orderIdText}>
                Order ID: <Text style={styles.orderIdCount}>98237469</Text>
              </Text>
              <View>
                <Text style={styles.priorityText}>Priority</Text>
              </View>
            </View>

            <View style={{marginBottom: 8,}}>
              <Text style={styles.orderIdText}>
                Order by: <Text style={styles.orderIdCount}>John Doe</Text>
              </Text>
            </View>

            <View style={styles.orderIdCard}>
              <Text style={styles.orderIdText}>
              Delivery boy: <Text style={styles.orderIdCount}>Mike Anthony</Text>
              </Text>
              <View>
                <Text style={styles.vehicletype}>Mini Truck</Text>
              </View>
            </View>

          </TouchableOpacity>

          <View style={styles.packageDetailCard}>
            <View style={styles.packageHeader}>
              <Image
                style={styles.packageImgaes}
                source={require('../images/PackageIcon.png')}
              />
              <Text style={styles.deliveryTime}>
                Delivered on Apr 19, 2024 at 11:30 AM
              </Text>
            </View>

            <View style={styles.packageMiddle}>
              <Ionicons name="location-outline" size={15} color="#717172" />
              <Text style={styles.fromLocation}>
                From <Text style={styles.Location}>North Street, ABC</Text>
              </Text>
            </View>

            <View style={styles.packageMiddle}>
              <MaterialIcons name="my-location" size={15} color="#717172" />
              <Text style={styles.fromLocation}>
                To <Text style={styles.Location}>To 5th Avenue, XYZ</Text>
              </Text>
            </View>

            <View style={styles.borderShow}></View>

            <View style={styles.orderIdCard}>
              <Text style={styles.orderIdText}>
                Order ID: <Text style={styles.orderIdCount}>98237469</Text>
              </Text>
              {/* <View>
                <Text style={styles.priorityText}>Priority</Text>
              </View> */}
            </View>

            <View style={{marginBottom: 10,}}>
              <Text style={styles.orderIdText}>
                Order by: <Text style={styles.orderIdCount}>John Doe</Text>
              </Text>
            </View>

            <View style={styles.orderIdCard}>
              <Text style={styles.orderIdText}>
              Delivery boy: <Text style={styles.orderIdCount}>Mike Anthony</Text>
              </Text>
              <View>
                <Text style={styles.vehicletype}>Mini Truck</Text>
              </View>
            </View>

          </View>

          <View style={styles.packageDetailCard}>
            <View style={styles.packageHeader}>
              <Image
                style={styles.packageImgaes}
                source={require('../images/PackageIcon.png')}
              />
              <Text style={styles.deliveryTime}>
                Delivered on Apr 19, 2024 at 11:30 AM
              </Text>
            </View>

            <View style={styles.packageMiddle}>
              <Ionicons name="location-outline" size={15} color="#717172" />
              <Text style={styles.fromLocation}>
                From <Text style={styles.Location}>North Street, ABC</Text>
              </Text>
            </View>

            <View style={styles.packageMiddle}>
              <MaterialIcons name="my-location" size={15} color="#717172" />
              <Text style={styles.fromLocation}>
                To <Text style={styles.Location}>To 5th Avenue, XYZ</Text>
              </Text>
            </View>

            <View style={styles.borderShow}></View>

            <View style={styles.orderIdCard}>
              <Text style={styles.orderIdText}>
                Order ID: <Text style={styles.orderIdCount}>98237469</Text>
              </Text>
              {/* <View>
                <Text style={styles.priorityText}>Priority</Text>
              </View> */}
            </View>

            <View style={{marginBottom: 10,}}>
              <Text style={styles.orderIdText}>
                Order by: <Text style={styles.orderIdCount}>John Doe</Text>
              </Text>
            </View>

            <View style={styles.orderIdCard}>
              <Text style={styles.orderIdText}>
              Delivery boy: <Text style={styles.orderIdCount}>Mike Anthony</Text>
              </Text>
              <View>
                <Text style={styles.vehicletype}>Mini Truck</Text>
              </View>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const ScheduledList = ({navigation}) => {
  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('ScheduleOverview')} style={styles.packageDetailCard}>
          <View style={styles.packageHeader}>
            <Image
              style={styles.packageImgaes}
              source={require('../images/PackageIcon.png')}
            />
            <Text style={styles.deliveryTime}>
              Delivered on Apr 19, 2024 at 11:30 AM
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <Ionicons name="location-outline" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              From <Text style={styles.Location}>North Street, ABC</Text>
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <MaterialIcons name="my-location" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              To <Text style={styles.Location}>To 5th Avenue, XYZ</Text>
            </Text>
          </View>

          <View style={styles.borderShow}></View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
              Order ID: <Text style={styles.orderIdCount}>98237469</Text>
            </Text>
            <View>
              <Text style={styles.priorityText}>Priority</Text>
            </View>
          </View>

          <View style={{marginBottom: 8,}}>
            <Text style={styles.orderIdText}>
              Order by: <Text style={styles.orderIdCount}>John Doe</Text>
            </Text>
          </View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
            Delivery boy: <Text style={styles.orderIdCount}>Mike Anthony</Text>
            </Text>
            <View>
              <Text style={styles.vehicletype}>Mini Truck</Text>
            </View>
          </View>

        </TouchableOpacity>

        <View style={styles.packageDetailCard}>
          <View style={styles.packageHeader}>
            <Image
              style={styles.packageImgaes}
              source={require('../images/PackageIcon.png')}
            />
            <Text style={styles.deliveryTime}>
              Delivered on Apr 19, 2024 at 11:30 AM
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <Ionicons name="location-outline" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              From <Text style={styles.Location}>North Street, ABC</Text>
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <MaterialIcons name="my-location" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              To <Text style={styles.Location}>To 5th Avenue, XYZ</Text>
            </Text>
          </View>

          <View style={styles.borderShow}></View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
              Order ID: <Text style={styles.orderIdCount}>98237469</Text>
            </Text>
            {/* <View>
              <Text style={styles.priorityText}>Priority</Text>
            </View> */}
          </View>

          <View style={{marginBottom: 10,}}>
            <Text style={styles.orderIdText}>
              Order by: <Text style={styles.orderIdCount}>John Doe</Text>
            </Text>
          </View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
            Delivery boy: <Text style={styles.orderIdCount}>Mike Anthony</Text>
            </Text>
            <View>
              <Text style={styles.vehicletype}>Mini Truck</Text>
            </View>
          </View>

        </View>

        <View style={styles.packageDetailCard}>
          <View style={styles.packageHeader}>
            <Image
              style={styles.packageImgaes}
              source={require('../images/PackageIcon.png')}
            />
            <Text style={styles.deliveryTime}>
              Delivered on Apr 19, 2024 at 11:30 AM
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <Ionicons name="location-outline" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              From <Text style={styles.Location}>North Street, ABC</Text>
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <MaterialIcons name="my-location" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              To <Text style={styles.Location}>To 5th Avenue, XYZ</Text>
            </Text>
          </View>

          <View style={styles.borderShow}></View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
              Order ID: <Text style={styles.orderIdCount}>98237469</Text>
            </Text>
            {/* <View>
              <Text style={styles.priorityText}>Priority</Text>
            </View> */}
          </View>

          <View style={{marginBottom: 10,}}>
            <Text style={styles.orderIdText}>
              Order by: <Text style={styles.orderIdCount}>John Doe</Text>
            </Text>
          </View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
            Delivery boy: <Text style={styles.orderIdCount}>Mike Anthony</Text>
            </Text>
            <View>
              <Text style={styles.vehicletype}>Mini Truck</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  </ScrollView>
  );
};

const PastList = ({navigation}) => {
  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 5,
        }}>
        <View style={styles.packageDetailCard}>
          <View style={styles.packageHeader}>
            <Image
              style={styles.packageImgaes}
              source={require('../images/PackageIcon.png')}
            />
            <Text style={styles.deliveryTime}>
              Delivered on Apr 19, 2024 at 11:30 AM
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <Ionicons name="location-outline" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              From <Text style={styles.Location}>North Street, ABC</Text>
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <MaterialIcons name="my-location" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              To <Text style={styles.Location}>To 5th Avenue, XYZ</Text>
            </Text>
          </View>

          <View style={styles.borderShow}></View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
              Order ID: <Text style={styles.orderIdCount}>98237469</Text>
            </Text>
            <View>
              <Text style={styles.priorityText}>Priority</Text>
            </View>
          </View>

          <View style={{marginBottom: 8,}}>
            <Text style={styles.orderIdText}>
              Order by: <Text style={styles.orderIdCount}>John Doe</Text>
            </Text>
          </View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
            Delivery boy: <Text style={styles.orderIdCount}>Mike Anthony</Text>
            </Text>
            <View>
              <Text style={styles.vehicletype}>Mini Truck</Text>
            </View>
          </View>

        </View>

        <View style={styles.packageDetailCard}>
          <View style={styles.packageHeader}>
            <Image
              style={styles.packageImgaes}
              source={require('../images/PackageIcon.png')}
            />
            <Text style={styles.deliveryTime}>
              Delivered on Apr 19, 2024 at 11:30 AM
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <Ionicons name="location-outline" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              From <Text style={styles.Location}>North Street, ABC</Text>
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <MaterialIcons name="my-location" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              To <Text style={styles.Location}>To 5th Avenue, XYZ</Text>
            </Text>
          </View>

          <View style={styles.borderShow}></View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
              Order ID: <Text style={styles.orderIdCount}>98237469</Text>
            </Text>
            {/* <View>
              <Text style={styles.priorityText}>Priority</Text>
            </View> */}
          </View>

          <View style={{marginBottom: 10,}}>
            <Text style={styles.orderIdText}>
              Order by: <Text style={styles.orderIdCount}>John Doe</Text>
            </Text>
          </View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
            Delivery boy: <Text style={styles.orderIdCount}>Mike Anthony</Text>
            </Text>
            <View>
              <Text style={styles.vehicletype}>Mini Truck</Text>
            </View>
          </View>

        </View>

        <View style={styles.packageDetailCard}>
          <View style={styles.packageHeader}>
            <Image
              style={styles.packageImgaes}
              source={require('../images/PackageIcon.png')}
            />
            <Text style={styles.deliveryTime}>
              Delivered on Apr 19, 2024 at 11:30 AM
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <Ionicons name="location-outline" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              From <Text style={styles.Location}>North Street, ABC</Text>
            </Text>
          </View>

          <View style={styles.packageMiddle}>
            <MaterialIcons name="my-location" size={15} color="#717172" />
            <Text style={styles.fromLocation}>
              To <Text style={styles.Location}>To 5th Avenue, XYZ</Text>
            </Text>
          </View>

          <View style={styles.borderShow}></View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
              Order ID: <Text style={styles.orderIdCount}>98237469</Text>
            </Text>
            {/* <View>
              <Text style={styles.priorityText}>Priority</Text>
            </View> */}
          </View>

          <View style={{marginBottom: 10,}}>
            <Text style={styles.orderIdText}>
              Order by: <Text style={styles.orderIdCount}>John Doe</Text>
            </Text>
          </View>

          <View style={styles.orderIdCard}>
            <Text style={styles.orderIdText}>
            Delivery boy: <Text style={styles.orderIdCount}>Mike Anthony</Text>
            </Text>
            <View>
              <Text style={styles.vehicletype}>Mini Truck</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  </ScrollView>
  );
};

const Ongoing = () => {
  return (
    <View style={{flex: 1}}>
      <OngoingList />
    </View>
  );
};

const Scheduled = () => {
  return (
    <View style={{flex: 1}}>
      <ScheduledList />
    </View>
  );
};

const Past = () => {
  return (
    <View style={{flex: 1}}>
      <PastList />
    </View>
  );
};

function Orders({navigation}) {
  const [searchText, setSearchText] = useState('');
  const [index, setIndex] = useState(0);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 5,
          backgroundColor: '#FBFAF5',
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
            placeholderTextColor={colors.text}
            placeholder="Search order by ID"
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
        <Tab.Screen name="Ongoing">
          {() => <OngoingList navigation={navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Scheduled">
          {() => <ScheduledList navigation={navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Past">
          {() => <PastList navigation={navigation} />}
        </Tab.Screen>
      </Tab.Navigator>
      {/* End of Tab Navigator */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
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
  packageDetailCard: {
    backgroundColor: colors.white,
    padding: 13,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 7,
    marginTop: 7,
  },
  packageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  packageMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 5,
  },
  deliveryTime: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 10,
  },
  fromLocation: {
    color: colors.subText,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginLeft: 15,
  },
  Location: {
    color: colors.text,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  borderShow: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    width: '100%',
    marginVertical: 15,
  },
  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderId: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  valueMoney: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.secondary,
  },
  listText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  button: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.primary,
    marginTop: 10,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  text: {
    color: colors.text,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 30,
    marginBottom: 5,
    textAlign: 'center',
  },
  subText: {
    color: colors.text,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderActive: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    borderRadius: 10,
    padding: 5,
  },
  imagesManage: {
    width: 20,
    height: 20,
  },
  packageshiftHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fromshiftLocation: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.subText,
    marginLeft: 10,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  packageImgaes: {
    width: 23,
    height: 23,
  },
  orderIdText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  orderIdCount: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  priorityText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.Reject,
    backgroundColor: '#E74C3C12',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  orderIdCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  vehicletype: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
});

export default Orders;
