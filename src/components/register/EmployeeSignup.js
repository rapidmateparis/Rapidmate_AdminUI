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
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dropdown} from 'react-native-element-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {colors} from '../../colors';
// import DropDownDropdown from '../common component/dropdown';

const EmployeeSignup = ({navigation}) => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [number, setNumber] = useState('');
  const [post, setPost] = useState('');
  const [dropdownValue, setDropdownValue] = useState('+33');
  const [isFocus, setIsFocus] = useState(false);

  const togglePasswordVisibility = field => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'confirmPassword') {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  const data = [
    {label: '+91', value: '+91'},
    {label: '+33', value: '+33'},
  ];

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#fff'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '85%'}}>
            <Text style={[styles.logInText, {color: colors.text}]}>
              Employee signup
            </Text>
          </View>
        </View>
        <View style={styles.logFormView}>
          <View style={styles.textInputDiv}>
            <AntDesign name="user" size={18} color="#131314" />
            <TextInput
              style={[styles.loginput, {fontFamily: 'Montserrat-Regular'}]}
              placeholder="Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.textInputDiv}>
            <AntDesign name="mail" size={18} color="#131314" />
            <TextInput
              style={styles.loginput}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <AntDesign name="lock" size={18} color="#131314" />
            <TextInput
              style={[styles.input, {fontFamily: 'Montserrat-Regular'}]}
              placeholder="New Password"
              placeholderTextColor="#999"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              onPress={() => togglePasswordVisibility('password')}>
              <Feather
                name={passwordVisible ? 'eye' : 'eye-off'}
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <AntDesign name="lock" size={18} color="#131314" />
            <TextInput
              style={styles.input}
              placeholder="Confirm New Password"
              placeholderTextColor="#999"
              secureTextEntry={!confirmPasswordVisible}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
            <TouchableOpacity
              onPress={() => togglePasswordVisibility('confirmPassword')}>
              <Feather
                name={confirmPasswordVisible ? 'eye' : 'eye-off'}
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textInputDiv}>
            <AntDesign name="user" size={18} color="#131314" />
            <TextInput
              style={[styles.loginput, {fontFamily: 'Montserrat-Regular'}]}
              placeholder="Post"
              placeholderTextColor="#999"
              value={post}
              onChangeText={text => setPost(text)}
            />
          </View>
          <View style={styles.mobileNumberInput}>
            <View style={{width: 95}}>
              <View style={styles.containerDropdown}>
                <Dropdown
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? '+33' : '...'}
                  searchPlaceholder="+.."
                  value={dropdownValue}
                  selectedTextStyle={styles.selectedTextStyle}
                  placeholderStyle={styles.placeholderStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setDropdownValue(item.value);
                    setIsFocus(false);
                  }}
                  renderLeftIcon={() => (
                    <Image
                      style={{marginRight: 10}}
                      source={require('../../images/flagIcon.png')}
                    />
                  )}
                />
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="00 00 00 00 00)"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={11}
              value={number}
              onChangeText={text => setNumber(text)}
            />
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('DrawerNavigator')}
            style={[styles.logbutton, {backgroundColor: colors.primary}]}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateNewUser')}
            style={styles.signUpContainer}>
            <Text style={styles.signUpText}>
              Already have an account yet?{' '}
              <Text style={styles.loginBtn}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logInText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
  },
  loginAccessText: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    width: '95%',
    marginTop: 5,
  },
  logFormView: {
    backgroundColor: '#fff',
    marginTop: 20,
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
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
    paddingHorizontal: 10,
    width: '90%',
  },
  mobileNumberInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  logbutton: {
    width: '100%',
    marginTop: 80,
    borderRadius: 5,
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Montserrat-Medium',
  },
  signUpContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2C303336',
  },
  containerDropdown: {
    borderRightWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 2,
  },
  input: {
    flex: 1,
    fontSize: 14,
    paddingHorizontal: 10,
    color: colors.text,
    fontFamily: 'Montserrat-Regular',
  },
  accountType: {
    fontFamily: 'Montserrat-Regular',
    marginBottom: 20,
    marginTop: 10,
    fontSize: 12,
    color: colors.text,
  },
  accountCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2C303336',
  },
  selectedCard: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  accountTitle: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginLeft: 5,
  },
  checkIcon: {
    backgroundColor: colors.primary,
    width: 20,
    height: 20,
    padding: 2,
    borderRadius: 15,
  },
  containerCountry: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  termOfRapidmate: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    textAlign: 'center',
    marginTop: 10,
    marginHorizontal: 50,
    lineHeight: 20,
  },
  cricleRound: {
    width: 20,
    height: 20,
    padding: 3,
    borderRadius: 15,
    borderBlockColor: colors.text,
    borderWidth: 1,
  },
  loginBtn: {
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
    color: colors.primary,
  },
  selectedTextStyle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  placeholderStyle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  inputSearchStyle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
});

export default EmployeeSignup;
