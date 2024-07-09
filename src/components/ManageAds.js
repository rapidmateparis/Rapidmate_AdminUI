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
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CheckBox from '@react-native-community/checkbox';
import ViewUserInfoModal from './commonComponents/ViewUserInfoModal';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createMaterialTopTabNavigator();

const LiveList = ({navigation}) => {
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [toggleCheckBoxUser, setToggleCheckBoxUser] = useState(false);

  return (
    <ScrollView style={{width: '100%'}}>
      <View>
        <View style={styles.listHeader}>
          <View style={styles.listCardMain}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxMain}
                onValueChange={newValue => setToggleCheckBoxMain(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userHeadings}>Campaign</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userHeadings}>Clicks</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userHeadings}>CPC</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userHeadings}>Invested</Text>
            </View>
            <View style={{width: '5%'}} />
          </View>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity onPress={() => navigation.navigate('AdDetails')}>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.userInfoCard}>
            <View style={{width: '10%'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBoxUser}
                onValueChange={newValue => setToggleCheckBoxUser(newValue)}
                style={{alignSelf: 'flex-start'}}
                tintColors={{true: '#1D374E', false: '#000000'}}
              />
            </View>
            <View style={{width: '30%'}}>
              <Text style={styles.userMainHeadings}>Company Inc.</Text>
            </View>
            <View style={{width: '15%'}}>
              <Text style={styles.userMainHeadings}>13k</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€5.00</Text>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.userMainHeadings}>€65k</Text>
            </View>
            <View style={{width: '5%'}}>
              <TouchableOpacity>
                <SimpleLineIcons
                  name="options-vertical"
                  size={15}
                  color="#131314"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* User Info Modal is here  */}
    </ScrollView>
  );
};

const OfflineList = ({navigation}) => {
  const [toggleCheckBoxMain, setToggleCheckBoxMain] = useState(false);
  const [toggleCheckBoxUser, setToggleCheckBoxUser] = useState(false);

  return (
    <ScrollView style={{width: '100%'}}>
    <View>
      <View style={styles.listHeader}>
        <View style={styles.listCardMain}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxMain}
              onValueChange={newValue => setToggleCheckBoxMain(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userHeadings}>Campaign</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userHeadings}>Clicks</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userHeadings}>CPC</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userHeadings}>Invested</Text>
          </View>
          <View style={{width: '5%'}} />
        </View>
      </View>

      <View style={{paddingHorizontal: 10}}>
        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoCard}>
          <View style={{width: '10%'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBoxUser}
              onValueChange={newValue => setToggleCheckBoxUser(newValue)}
              style={{alignSelf: 'flex-start'}}
              tintColors={{true: '#1D374E', false: '#000000'}}
            />
          </View>
          <View style={{width: '30%'}}>
            <Text style={styles.userMainHeadings}>Company Inc.</Text>
          </View>
          <View style={{width: '15%'}}>
            <Text style={styles.userMainHeadings}>13k</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€5.00</Text>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.userMainHeadings}>€65k</Text>
          </View>
          <View style={{width: '5%'}}>
            <TouchableOpacity>
              <SimpleLineIcons
                name="options-vertical"
                size={15}
                color="#131314"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    {/* User Info Modal is here  */}
  </ScrollView>
  );
};

const Live = () => {
  return (
    <View style={{flex: 1}}>
      <LiveList />
    </View>
  );
};

const Offline = () => {
  return (
    <View style={{flex: 1}}>
      <OfflineList />
    </View>
  );
};

function ManageAds({navigation}) {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingTop: 5,
          backgroundColor: '#FFFFFF',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('NewAdRequests')}>
          <LinearGradient
            colors={['rgba(239, 176, 61, 0)', 'rgba(239, 176, 61, 0.08)']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            style={styles.container}>
            <View style={styles.requestCard}>
              <Image
                style={styles.requestImages}
                source={require('../images/requestIcon.png')}
              />
              <View style={styles.statusCard}>
                <Text style={styles.requestCount}>8 new ad requests</Text>
                <Text style={styles.missedConnections}>
                  Review the pending ad requests
                </Text>
              </View>
              <View>
                <AntDesign name="arrowright" size={20} color={colors.text} />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
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
        <Tab.Screen name="Live">
          {() => <LiveList navigation={navigation} />}
        </Tab.Screen>
        <Tab.Screen name="Offline">
          {() => <OfflineList navigation={navigation} />}
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
  listHeader: {
    backgroundColor: '#1D374E12',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  listCardMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userHeadings: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.subText,
  },
  userInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  userMainHeadings: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  container: {
    borderWidth: 1,
    borderColor: colors.secondary,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  requestCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 70,
  },
  requestImages: {
    width: 20,
    height: 21,
  },
  statusCard: {
    flex: 1,
    paddingLeft: 10,
  },
  requestCount: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  missedConnections: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
    marginTop: 3,
  },
});

export default ManageAds;
