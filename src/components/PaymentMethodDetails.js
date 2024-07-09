import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../colors';

const PaymentMethodDetails = ({navigation}) => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [promoEmails, setPromoEmails] = useState(false);

  const togglePushNotifications = () => {
    setPushNotifications(!pushNotifications);
  };

  const togglePromoEmails = () => {
    setPromoEmails(!promoEmails);
  };

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#FBFAF5'}}>
      <View style={{paddingHorizontal: 15}}>
        <ImageBackground
          style={styles.walletBgImage}
          source={require('../images/CreditCard.png')}
          borderRadius={15}>
          <View style={{paddingHorizontal: 25, paddingVertical: 15}}>
            <View style={styles.walletHeader}>
              <Text style={styles.companyName}>John Doe</Text>
              <Image
                style={styles.mastercard}
                source={require('../images/logos_mastercard.png')}
              />
            </View>
            <View style={styles.cardNumberCard}>
              <Text style={styles.walletBalance}>1234 5678 9012 3456</Text>
            </View>
            <View style={styles.actionCard}>
              <Text style={styles.btnText}>Expires 08-28</Text>
              <Text style={styles.btnText}>CVV 123</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.cardMainCard}>
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.subHeadings}>North Street, ABC</Text>

          <View style={styles.cardInfoCard}>
            <View style={{width: '45%'}}>
              <Text style={styles.subHeadings}>Status</Text>
              <Text style={styles.userHeadings}>Active</Text>
            </View>

            <View style={{width: '45%'}}>
              <Text style={styles.subHeadings}>Last used</Text>
              <Text style={styles.userHeadings}>2 hr ago</Text>
            </View>
          </View>
          <View style={{marginBottom: 15}}>
            <Text style={styles.subHeadings}>Total transactions</Text>
            <Text style={styles.userHeadings}>€156.25</Text>
          </View>

          <View style={styles.dateCard}>
            <View>
              <Text style={styles.headingMiddium}>12-09-24</Text>
              <Text style={styles.subHeadings}>Ordered delivery</Text>
            </View>
            <Text style={styles.headingMiddium}>€34.00</Text>
          </View>

          <View style={styles.dateCard}>
            <View>
              <Text style={styles.headingMiddium}>12-09-24</Text>
              <Text style={styles.subHeadings}>Ordered delivery</Text>
            </View>
            <Text style={styles.headingMiddium}>€34.00</Text>
          </View>

          <View style={styles.dateCard}>
            <View>
              <Text style={styles.headingMiddium}>12-09-24</Text>
              <Text style={styles.subHeadings}>Ordered delivery</Text>
            </View>
            <Text style={styles.headingMiddium}>€34.00</Text>
          </View>

          <View style={styles.dateCard}>
            <View>
              <Text style={styles.headingMiddium}>12-09-24</Text>
              <Text style={styles.subHeadings}>Ordered delivery</Text>
            </View>
            <Text style={styles.headingMiddium}>€34.00</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionButtonCard}>
        <TouchableOpacity style={styles.deactivateCard}>
            <Text style={styles.deactivateText}>Deactivate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  walletBgImage: {
    width: '100%',
    height: 230,
  },
  walletHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  companyName: {
    color: colors.text,
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
  },
  amount: {
    color: colors.white,
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
  },
  dollerSymbol: {
    fontSize: 40,
    color: colors.white,
    fontFamily: 'Montserrat-Regular',
  },
  moneyDot: {
    fontSize: 40,
    color: colors.white,
    fontFamily: 'Montserrat-Regular',
  },
  walletBalance: {
    color: colors.text,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  actionsBt: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 20,
    width: 100,
    height: 40,
    paddingVertical: 8,
  },
  btnText: {
    textAlign: 'center',
    color: colors.text,
    fontSize: 13,
    fontFamily: 'Montserrat-Medium',
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  addCardsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  addSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addCardText: {
    color: colors.text,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 5,
  },
  subCardName: {
    color: colors.text,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
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
  cardTitle: {
    fontSize: 14,
    flex: 1,
    color: colors.text,
    fontFamily: 'Montserrat-Medium',
  },
  paymentPlateform: {
    color: colors.text,
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  mailId: {
    color: '#131314',
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
  },
  securePayment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '55%',
  },
  paymentInfo: {
    color: '#1D1617',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 5,
  },
  mastercard: {
    width: 32,
    height: 20,
  },
  cardNumberCard: {
    marginTop: '20%',
  },
  subHeadings: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  userName: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  userHeadings: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  cardInfoCard: {
    flexDirection: 'row',
    marginVertical: 15,
  },

  headingMiddium: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold', 
    color: colors.text,
  },
  dateCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
  },
  deactivateCard: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 10,
    padding: 15,
  },
  deactivateText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    textAlign: 'center',
  },
  actionButtonCard: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 25,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
  },
  cardMainCard: {
    paddingVertical: 15,
  },
});

export default PaymentMethodDetails;
