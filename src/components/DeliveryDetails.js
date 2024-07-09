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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../colors';

const DeliveryDetails = ({navigation}) => {
  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.packageCard}>
          <Image
            style={styles.packageManager}
            source={require('../images/PickupPackage.png')}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.dropInfo}>Pickup information</Text>
            <Text style={styles.companyInfo}>Company Name</Text>
            <Text style={styles.dropInfo}>
              22 Rue de la Liberté, Paris, Île-de-France.
            </Text>
          </View>
        </View>

        <View style={styles.packageCard}>
          <Image
            style={styles.packageManager}
            source={require('../images/DropPackage.png')}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.dropInfo}>Drop off information</Text>
            <Text style={styles.companyInfo}>Company Name</Text>
            <Text style={styles.dropInfo}>
              22 Rue de la Liberté, Paris, Île-de-France.
            </Text>
          </View>
        </View>

        <View style={styles.requesterCard}>
          <View>
            <Image
              style={styles.requesterImga}
              source={require('../images/RequesterImage.png')}
            />
          </View>

          <View style={styles.requesterInfoCard}>
            <Text style={styles.requesterName}>John Doe</Text>
            <Text style={styles.addressRequester}>Île-de-France</Text>
          </View>
          <View>
            <Text style={styles.addressRequester}>Requester</Text>
          </View>
        </View>

        <View style={styles.requesterCard}>
          <View>
            <Image
              style={styles.requesterImga}
              source={require('../images/deliveryboyImage.jpeg')}
            />
          </View>

          <View style={styles.requesterInfoCard}>
            <Text style={styles.requesterName}>Mike Anthony</Text>
            <Text style={styles.addressRequester}>Mini Truck</Text>
          </View>
          <View>
            <Text style={styles.addressRequester}>Delivery boy</Text>
          </View>
        </View>

        <View style={styles.invoiceCard}>
          <View>
            <Image
              style={styles.fareImage}
              source={require('../images/OrderFareImg.png')}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <View style={styles.cardHeader}>
              <Text style={styles.orderFare}>Order fare</Text>
              <Text style={styles.totalmoney}>€34.00</Text>
            </View>

            <Text style={styles.travel}>Travelled 12 km in 32 mins</Text>

            <View style={styles.cardHeader}>
              <Text style={styles.orderFareValue}>Order fare</Text>
              <Text style={styles.value}>€30.00</Text>
            </View>

            <View style={styles.cardHeader}>
              <Text style={styles.orderFareValue}>Waiting</Text>
              <Text style={styles.value}>€03.00</Text>
            </View>

            <View style={styles.cardHeader}>
              <Text style={styles.orderFareValue}>Platform fee</Text>
              <Text style={styles.value}>€01.00</Text>
            </View>

            <View style={styles.cardHeader}>
              <Text style={styles.orderFareValue}>Amount charged</Text>
              <Text style={styles.value}>€34.00</Text>
            </View>

            <View style={styles.masterCard}>
              <Image
                style={styles.masterCardImage}
                source={require('../images/logos_mastercard.png')}
              />
              <Text style={styles.paidWith}>Paid with mastercard</Text>
            </View>
          </View>
        </View>

        <View style={styles.packageInformationCard}>
          <Text style={styles.packageTitle}>Package information</Text>
          <Text style={styles.orderdetails}>
            Order ID: <Text style={styles.detailsId}>20394</Text>
          </Text>
          <Text style={styles.orderdetails}>
            Comments:{' '}
            <Text style={styles.detailsId}>
              Lorem ipsum dolor sit amet conse ctetur. Ridiculus nunc platea
              sed.
            </Text>
          </Text>
          <Text style={styles.orderdetails}>
            Vehicle: <Text style={styles.detailsId}>Pickup truck</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  packageCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 10,
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
  dropInfo: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#131314',
    marginBottom: 10,
  },
  companyInfo: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  companyAddress: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.subText,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Add this line
  },
  orderFare: {
    width: '75%',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#131314',
  },
  invoiceCardBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  travel: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.subText,
    marginVertical: 5,
  },
  orderFareValue: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.subText,
    marginVertical: 5,
  },
  totalmoney: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.primary,
  },
  value: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  masterCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paidWith: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.subText,
    marginLeft: 5,
    marginVertical: 5,
  },
  packageInformationCard: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 15,
    marginTop: 7,
  },
  packageTitle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  orderdetails: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.subText,
    marginVertical: 3,
  },
  detailsId: {
    color: colors.text,
    fontFamily: 'Montserrat-Medium',
  },
  invoiceCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 10,
    marginTop: 10,
  },
  downloadInvoiceText: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    marginLeft: 15,
  },
  packageInvoiceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginBottom: 20,
    marginTop: 0,
  },
  packageManager: {
    width: 30,
    height: 30,
  },
  fareImage: {
    width: 26,
    height: 22,
  },
  masterCardImage: {
    width: 27,
    height: 17,
  },
  requesterCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 10,
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
  requesterImga: {
    height: 35,
    width: 35,
    borderRadius: 30,
  },
  requesterName: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  addressRequester: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  requesterInfoCard: {
    flex: 1,
    marginLeft: 10,
  },
});

export default DeliveryDetails;
