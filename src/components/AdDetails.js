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
import {colors} from '../colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AdDetails = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = vehicleDetails => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={{marginVertical: 20}}>
          <View style={styles.userTypeCard}>
            <View style={styles.brandLogoCard}>
              <Image
                style={styles.enterpriseIcon}
                source={require('../images/Levis-logo.png')}
              />
              <FontAwesome
                name="location-arrow"
                size={24}
                color={colors.white}
                style={styles.arrowIcon}
              />
            </View>

            <View>
              <View style={styles.brandinfoCard}>
                <Image
                  style={styles.saleBoard}
                  source={require('../images/saleBoard.png')}
                />
                <View style={styles.brandSaleCard}>
                  <Text style={styles.brandHeading}>Levis SALE!</Text>
                  <Text style={styles.brandSubHeading}>
                    1901 Thornridge Cir. Shiloh, California
                  </Text>
                  <TouchableOpacity style={styles.learnMoreBtn}>
                    <Text style={styles.learnMoretext}>Learn more</Text>
                  </TouchableOpacity>
                </View>
                <FontAwesome
                  name="location-arrow"
                  size={24}
                  color={colors.white}
                  style={styles.arrowBrandInfoIcon}
                />
              </View>
            </View>
          </View>

          <View style={{marginTop: 20}}>
            <View style={styles.upperCard}>
              <View>
                <Text style={styles.companyName}>Company Name</Text>
                <Text style={styles.companymainName}>North Street, ABC</Text>
              </View>
              <View>
                <Text style={styles.liveNow}>LIVE NOW</Text>
              </View>
            </View>
            <View style={styles.userdetailCard}>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Ad Link</Text>
                <Text style={styles.userName}>www.website.com</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Industry</Text>
                <Text style={styles.userName}>Industry</Text>
              </View>
            </View>

            <View style={styles.borderShowOff} />

            <View style={styles.userdetailCard}>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>CPC</Text>
                <Text style={styles.userName}>€5.00</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.userfullName}>Budget</Text>
                <Text style={styles.userName}>€100.00</Text>
              </View>
            </View>

            <View style={styles.userdetailCard}>
              <View style={{width: '100%'}}>
                <Text style={styles.userfullName}>Ad ID</Text>
                <Text style={styles.userName}>234534532</Text>
              </View>
            </View>

            <View style={styles.borderShowOff} />

            <View style={styles.totalSpendMoney}>
              <Text style={styles.userfullName}>Total spendings</Text>
              <Text style={styles.userName}>€85.00</Text>
            </View>

            <View style={styles.spentCardmain}>
              <View style={styles.moneyCard}>
                <Text style={styles.userfullName}>Spent today</Text>
                <View style={styles.spentTodayCard}>
                  <Text style={styles.spentmoney}>€15.00</Text>
                  <AntDesign
                    name="caretup"
                    size={10}
                    color={colors.Completed}
                  />
                </View>
              </View>

              <View style={styles.moneyCard}>
                <Text style={styles.userfullName}>Impressions</Text>
                <View style={styles.spentTodayCard}>
                  <Text style={styles.spentmoney}>56</Text>
                  <AntDesign
                    name="caretup"
                    size={10}
                    color={colors.Completed}
                  />
                </View>
              </View>
            </View>

          </View>
        </View>
      </View>
      <View style={styles.allBtnCards}>
        <View style={styles.actionBtnsCard}>
          <TouchableOpacity style={styles.ignoreBtn}>
            <Text style={styles.actionIgnore}>Remove</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rejectBtn}>
            <Text style={styles.actionReject}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logButton: {
    width: '100%',
    marginTop: 40,
    borderRadius: 5,
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Montserrat-Medium',
  },
  enterpriseIcon: {
    width: 55,
    height: 55,
    zIndex: 99,
  },
  userType: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
    marginVertical: 10,
  },
  userTypeCard: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  userfullName: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  userName: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    marginVertical: 3,
  },
  userdetailCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  userAccountType: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.Crimson,
    backgroundColor: '#FF005812',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  borderShowOff: {
    borderWidth: 0.2,
    borderColor: '#ccc',
    width: '100%',
    marginVertical: 20,
  },
  ignoreBtn: {
    borderWidth: 1,
    borderColor: colors.Reject,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: '48%',
  },
  actionIgnore: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.Reject,
    textAlign: 'center',
  },
  actionBtnsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  rejectBtn: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: '48%',
  },
  actionReject: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    textAlign: 'center',
  },
  allBtnCards: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5,
  },
  brandLogoCard: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 75,
    width: 75,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5,
    position: 'relative',
  },
  arrowIcon: {
    position: 'absolute',
    bottom: -14,
    transform: [{rotate: '135deg'}],
  },
  brandinfoCard: {
    backgroundColor: colors.white,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    width: 155,
    borderRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5,
    position: 'relative',
  },
  saleBoard: {
    width: 155,
    height: 95,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  brandHeading: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  brandSubHeading: {
    fontSize: 10,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  learnMoreBtn: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 8,
  },
  learnMoretext: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    textAlign: 'center',
  },
  brandSaleCard: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  arrowBrandInfoIcon: {
    position: 'absolute',
    bottom: -14,
    left: '45%',
    transform: [{rotate: '135deg'}],
  },
  companyName: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  companymainName: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  liveNow: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.Crimson,
    backgroundColor: '#FF005812',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  upperCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalSpendMoney: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    borderRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5,
  },
  spentTodayCard: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  spentmoney: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    marginRight: 5,
  },
  moneyCard: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: colors.white,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    borderRadius: 10,
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5,
  },
  spentCardmain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});

export default AdDetails;
