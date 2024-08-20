import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Shift from '../images/Calender.png';
import PickupDrop from '../images/Location-Dot.png';
import Both from '../images/Calender-Both.png';
import { colors } from '../colors';

const ManageDeliveryPreferance = () => {
  // Initialize state with all toggles set to true
  const [toggleStates, setToggleStates] = useState([true, true, true]);

  const preferance = [
    {
      Image: Shift,
      type: 'Shift wise',
      discription:
        'You will set your availability for a time period on select days',
      availability: 'Available',
      style: styles.shiftCalender,
    },
    {
      Image: PickupDrop,
      type: 'Pickup & dropoff',
      discription: 'Accept deliveries any time of the day',
      availability: 'Available',
      style: styles.PickupLocDot,
    },
    {
      Image: Both,
      type: 'Both',
      discription: 'Work as shift wise and pickup/dropoff both',
      availability: 'Available',
      style: styles.bothCalender,
    },
  ];

  const togglePreference = (index) => {
    // Toggle the state of the clicked switch
    setToggleStates(prevStates =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <ScrollView style={{ width: '100%', backgroundColor: '#FBFAF5' }}>
      <View style={{ paddingHorizontal: 15 }}>
        <View>
          {preferance.map((managepreferance, index) => (
            <View key={index} style={styles.requesterCard}>
              <View>
                <Image
                  style={managepreferance.style}
                  source={managepreferance.Image}
                />
              </View>

              <View style={styles.requesterInfoCard}>
                <Text style={styles.requesterName}>
                  {managepreferance.type}
                </Text>
                <Text style={styles.discription}>
                  {managepreferance.discription}
                </Text>
                <View style={styles.vehicleDetails}>
                  <Text style={styles.availableStatus}>
                    {managepreferance.availability}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => togglePreference(index)}>
                <MaterialCommunityIcons
                  name={toggleStates[index] ? 'toggle-switch' : 'toggle-switch-off'}
                  size={50}
                  color={toggleStates[index] ? '#1D374E' : '#D3D3D3'}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  requesterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    height: 100,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 7,
    marginTop: 7,
  },
  requesterInfoCard: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  requesterName: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  discription: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  vehicleDetails: {
    flexDirection: 'row',
    marginTop: 5,
  },
  availableStatus: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.Crimson,
    backgroundColor: '#FF005812',
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  shiftCalender: {
    width: 40,
    height: 39,
  },
  PickupLocDot: {
    width: 34,
    height: 41,
  },
  bothCalender: {
    width: 40,
    height: 40,
  },
});

export default ManageDeliveryPreferance;
