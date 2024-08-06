import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../colors';
import {useLoader} from '../../utils/loaderContext';
import {authenticateUser} from '../../data_manager';

const AdminLogin = ({navigation}) => {
  const [emailPhone, setEmailPhone] = useState('supports@rapidmate.com'); //supports@rapidmate.com
  const [password, setPassword] = useState('Syszoo12!'); //Syszoo12!
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {setLoading} = useLoader();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    // Check if the input is a valid email
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailPhone);

    // Check if the input is a valid phone number
    const isPhone = /^\d{10}$/.test(emailPhone);

    if (isEmail || isPhone) {
      setLoading(true);
      let params = {
        info: {
          userName: emailPhone, // "syszoomail@gmail.com"
          password: password, //"Syszoo12!"
        },
      };
      authenticateUser(
        params,
        successResponse => {
          if (successResponse[0]._success) {
            setLoading(false);
            if (successResponse[0]._response) {
              if (
                successResponse[0]._response.name == 'NotAuthorizedException'
              ) {
                Alert.alert(
                  'Error Alert',
                  'Username or password is incorrect',
                  [{text: 'OK', onPress: () => {}}],
                );
              } else if (
                successResponse[0]._response.name == 'UserNotConfirmedException'
              ) {
                Alert.alert('Error Alert', 'Delivery Boy Verfication Pending', [
                  {text: 'OK', onPress: () => {}},
                ]);
              } else {
                navigation.navigate('MainScreen');
              }
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
    } else {
      Alert.alert('Error Alert', 'Username or password not empty', [
        {text: 'OK', onPress: () => {}},
      ]);
    }
  };

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#fff'}}>
      <View style={{paddingHorizontal: 15}}>
        <Text style={styles.logInText}>Admin Login</Text>
        <View>
          <View style={styles.logFormView}>
            <View style={styles.textInputDiv}>
              <AntDesign name="user" size={18} color="#131314" />
              <TextInput
                style={[styles.loginput, {fontFamily: 'Montserrat-Regular'}]}
                placeholder="Email/Phone"
                placeholderTextColor="#999"
                value={emailPhone}
                onChangeText={text => setEmailPhone(text)}
              />
            </View>
            <View style={styles.textInputDiv}>
              <AntDesign name="lock" size={18} color="#131314" />
              <TextInput
                style={[styles.loginput, {fontFamily: 'Montserrat-Regular'}]}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry={!passwordVisible} // Use the secureTextEntry prop based on passwordVisible state
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Feather
                  name={passwordVisible ? 'eye' : 'eye-off'} // Change the icon based on passwordVisible state
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('UserSettingsMenuProvider')}>
              <Text style={[styles.forgotPasswordText, {color: colors.text}]}>
                Forgot your password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.logbutton, {backgroundColor: colors.primary}]}
              onPress={handleLogin}>
              <Text style={styles.loginBtn}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('EmployeeSignup')}
              style={styles.signUpContainer}>
              <Text style={styles.signUpText}>
                Don’t have an account yet?{' '}
                <Text style={styles.signupBtn}>Register</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logInText: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  loginAccessText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    width: '70%',
    marginTop: 5,
  },
  logFormView: {
    backgroundColor: '#fff',
    marginTop: 20,
    paddingTop: 30,
  },
  textInputDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2C303336',
  },
  loginput: {
    fontSize: 12,
    paddingHorizontal: 10,
    width: '90%',
    fontFamily: 'Montserrat-Regular',
  },
  forgotPasswordText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 20,
    textAlign: 'right',
  },
  logbutton: {
    width: '100%',
    marginTop: 40,
    borderRadius: 5,
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpContainer: {
    marginTop: '80%',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#000',
  },
  loginBtn: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Montserrat-Medium',
  },
  signupBtn: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    color: colors.primary,
  },
});

export default AdminLogin;
