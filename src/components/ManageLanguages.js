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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ConsumerList = () => {
  const [spanish, setSpanish] = useState(false);
  const [english, setEnglish] = useState(true);
  const [mandarin, setMandarin] = useState(false);
  const [french, setFrench] = useState(true);
  const [arabic, setArabic] = useState(true);

  const toggleSpanish = () => {
    setSpanish(!spanish);
  };

  const toggleEnglish = () => {
    setEnglish(!english);
  };

  const toggleMandarin = () => {
    setMandarin(!mandarin);
  };

  const toggleFrench = () => {
    setFrench(!french);
  };

  const toggleArabic = () => {
    setArabic(!arabic);
  };

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/SpanishFalg.png')}
              />
              <Text style={styles.cardTitle}>Spanish</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleSpanish}>
                <MaterialCommunityIcons
                  name={spanish ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={spanish ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/EnglishFlag.png')}
              />
              <Text style={styles.cardTitle}>English</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleEnglish}>
                <MaterialCommunityIcons
                  name={english ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={english ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/MandarinFlag.png')}
              />
              <Text style={styles.cardTitle}>Mandarin</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleMandarin}>
                <MaterialCommunityIcons
                  name={mandarin ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={mandarin ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/FrenchFlag.png')}
              />
              <Text style={styles.cardTitle}>French</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleFrench}>
                <MaterialCommunityIcons
                  name={french ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={french ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/ArabicFlag.png')}
              />
              <Text style={styles.cardTitle}>Arabic</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleArabic}>
                <MaterialCommunityIcons
                  name={arabic ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={arabic ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const DeliveryBoyList = ({navigation}) => {
  const [spanish, setSpanish] = useState(false);
  const [english, setEnglish] = useState(true);
  const [mandarin, setMandarin] = useState(false);
  const [french, setFrench] = useState(true);
  const [arabic, setArabic] = useState(true);

  const toggleSpanish = () => {
    setSpanish(!spanish);
  };

  const toggleEnglish = () => {
    setEnglish(!english);
  };

  const toggleMandarin = () => {
    setMandarin(!mandarin);
  };

  const toggleFrench = () => {
    setFrench(!french);
  };

  const toggleArabic = () => {
    setArabic(!arabic);
  };

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/SpanishFalg.png')}
              />
              <Text style={styles.cardTitle}>Spanish</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleSpanish}>
                <MaterialCommunityIcons
                  name={spanish ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={spanish ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/EnglishFlag.png')}
              />
              <Text style={styles.cardTitle}>English</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleEnglish}>
                <MaterialCommunityIcons
                  name={english ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={english ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/MandarinFlag.png')}
              />
              <Text style={styles.cardTitle}>Mandarin</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleMandarin}>
                <MaterialCommunityIcons
                  name={mandarin ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={mandarin ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/FrenchFlag.png')}
              />
              <Text style={styles.cardTitle}>French</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleFrench}>
                <MaterialCommunityIcons
                  name={french ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={french ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/ArabicFlag.png')}
              />
              <Text style={styles.cardTitle}>Arabic</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleArabic}>
                <MaterialCommunityIcons
                  name={arabic ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={arabic ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const EnterpriseList = ({navigation}) => {
  const [spanish, setSpanish] = useState(false);
  const [english, setEnglish] = useState(true);
  const [mandarin, setMandarin] = useState(false);
  const [french, setFrench] = useState(true);
  const [arabic, setArabic] = useState(true);

  const toggleSpanish = () => {
    setSpanish(!spanish);
  };

  const toggleEnglish = () => {
    setEnglish(!english);
  };

  const toggleMandarin = () => {
    setMandarin(!mandarin);
  };

  const toggleFrench = () => {
    setFrench(!french);
  };

  const toggleArabic = () => {
    setArabic(!arabic);
  };

  return (
    <ScrollView>
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/SpanishFalg.png')}
              />
              <Text style={styles.cardTitle}>Spanish</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleSpanish}>
                <MaterialCommunityIcons
                  name={spanish ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={spanish ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/EnglishFlag.png')}
              />
              <Text style={styles.cardTitle}>English</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleEnglish}>
                <MaterialCommunityIcons
                  name={english ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={english ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/MandarinFlag.png')}
              />
              <Text style={styles.cardTitle}>Mandarin</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleMandarin}>
                <MaterialCommunityIcons
                  name={mandarin ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={mandarin ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/FrenchFlag.png')}
              />
              <Text style={styles.cardTitle}>French</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleFrench}>
                <MaterialCommunityIcons
                  name={french ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={french ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.bookAddress}>
            <View style={styles.countyCard}>
              <Image
                style={styles.countyFlags}
                source={require('../images/ArabicFlag.png')}
              />
              <Text style={styles.cardTitle}>Arabic</Text>
            </View>
            <View style={{width: '15%'}}>
              <TouchableOpacity onPress={toggleArabic}>
                <MaterialCommunityIcons
                  name={arabic ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={arabic ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const Consumer = () => {
  return (
    <View style={{flex: 1}}>
      <ConsumerList />
    </View>
  );
};

const DeliveryBoy = () => {
  return (
    <View style={{flex: 1}}>
      <DeliveryBoyList />
    </View>
  );
};

const Enterprise = () => {
  return (
    <View style={{flex: 1}}>
      <EnterpriseList />
    </View>
  );
};

function ManageLanguages({navigation}) {

  return (
    <View style={{flex: 1}}>
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
});

export default ManageLanguages;
