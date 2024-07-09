import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {colors} from '../colors';

const CreateNewUser = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const selectRole = role => {
    setSelectedRole(role);
  };

  return (
    <ScrollView style={{width: '100%', backgroundColor: '#fff'}}>
      <View style={{paddingHorizontal: 15}}>
        <View>
          <View style={styles.logFormView}>
            <View>
              <Text style={styles.inputLabel}>Full name</Text>
              <TextInput
                style={[styles.loginput, {fontFamily: 'Montserrat-Regular'}]}
                placeholder="Type here.."
                placeholderTextColor="#999"
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>

            <View>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={[styles.loginput, {fontFamily: 'Montserrat-Regular'}]}
                placeholder="Type here.."
                placeholderTextColor="#999"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>

            <View>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={[styles.loginput, {fontFamily: 'Montserrat-Regular'}]}
                placeholder="Type here.."
                placeholderTextColor="#999"
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />
            </View>

            <View>
              <Text style={styles.inputLabel}>Role</Text>
              <View style={styles.roleCard}>
                <TouchableOpacity
                  style={[
                    styles.roleButton,
                    selectedRole === 'Pick & Drop-off' && {
                      backgroundColor: colors.primary,
                      borderColor: colors.primary,
                    },
                  ]}
                  onPress={() => selectRole('Pick & Drop-off')}>
                  <Text
                    style={[
                      styles.roleType,
                      selectedRole === 'Pick & Drop-off' && {color: '#fff'},
                    ]}>
                    Pick & Drop-off
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.roleButton,
                    selectedRole === 'Delivery Boy' && {
                      backgroundColor: colors.primary,
                      borderColor: colors.primary,
                    },
                  ]}
                  onPress={() => selectRole('Delivery Boy')}>
                  <Text
                    style={[
                      styles.roleType,
                      selectedRole === 'Delivery Boy' && {color: '#fff'},
                    ]}>
                    Delivery Boy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.roleButton,
                    selectedRole === 'Enterprise' && {
                      backgroundColor: colors.primary,
                      borderColor: colors.primary,
                    },
                  ]}
                  onPress={() => selectRole('Enterprise')}>
                  <Text
                    style={[
                      styles.roleType,
                      selectedRole === 'Enterprise' && {color: '#fff'},
                    ]}>
                    Enterprise
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('EnterpriseNewJoinRequest')}
            style={[styles.logButton, {backgroundColor: colors.primary}]}>
            <Text style={styles.loginBtn}>Create user</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logFormView: {
    backgroundColor: '#fff',
    marginTop: 20,
  },
  loginput: {
    fontSize: 12,
    width: '100%',
    fontFamily: 'Montserrat-Regular',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2C303336',
  },
  logButton: {
    width: '100%',
    marginTop: 40,
    borderRadius: 5,
    padding: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLabel: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    marginBottom: 5,
  },
  roleType: {
    fontSize: 10,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
  },
  roleButton: {
    backgroundColor: '#34495E12',
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#34495E12',
  },
  roleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginBtn: {
    fontSize: 14,
    color: colors.white,
    fontFamily: 'Montserrat-Medium',
  },
});

export default CreateNewUser;
