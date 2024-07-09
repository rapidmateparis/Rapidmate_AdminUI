import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../colors';

const Main = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.logoCard}>
          <Image style={styles.adminLogo} source={require('../images/LogoAdmin.png')} />
          <Text style={styles.companyName}>Rapidmate</Text>
          <Text style={styles.panelStatus}>Admin panel</Text>
        </View>
      </View>
      <Image style={styles.bottomImage} source={require('../images/ThumbUp.png')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.primary,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 80,
    alignItems: 'center',
  },
  companyName: {
    fontSize: 35,
    fontFamily: 'Montserrat-Bold',
    color: colors.text,
    marginTop: 20,
  },
  adminLogo: {
    width: 105,
    height: 112,
  },
  logoCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  panelStatus: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: colors.white,
    backgroundColor: colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginVertical: 10,
  },
  bottomImage: {
    width: '100%',
    height: 380,
  },
});

export default Main;
