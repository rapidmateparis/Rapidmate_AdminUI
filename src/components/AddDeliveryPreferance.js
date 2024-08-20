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
import {colors} from '../colors';
import ChoosePhotoByCameraGallaryModal from './commonComponents/ChoosePhotoByCameraGallaryModal';
import {
  handleCameraLaunchFunction,
  handleImageLibraryLaunchFunction,
} from '../utils/common';

const AddDeliveryPreferance = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [capacity, setCapacity] = useState('');
  const [promoEmails, setPromoEmails] = useState(false);
  const [isModalVisibleCamera, setModalVisibleCamera] = useState(false);
  const [photoFileName, setPhotoFileName] = useState('');
  const [photoUri, setPhotoUri] = useState(null);

  const togglePromoEmails = () => {
    setPromoEmails(!promoEmails);
  };

  const toggleModal = () => {
    setModalVisibleCamera(!isModalVisibleCamera);
  };

  const handlePhotoOpenClose = visible => {
    setModalVisibleCamera(!visible);
  };

  const handleCameraLaunch = async () => {
    setModalVisibleCamera(!isModalVisibleCamera);
    try {
      let cameraData = await handleCameraLaunchFunction();
      if (cameraData.status == 'success') {
        setPhotoFileName(getFileName(cameraData.data.uri));
        setPhotoUri(cameraData.data.uri);
      }
    } catch (error) {
      // Handle errors here
    }
  };

  const handleImageLibraryLaunch = async () => {
    setModalVisibleCamera(!isModalVisibleCamera);
    try {
      let imageData = await handleImageLibraryLaunchFunction();
      if (imageData.status == 'success') {
        setPhotoFileName(getFileName(imageData.data.uri));
        setPhotoUri(imageData.data.uri);
      }
    } catch (error) {
      // Handle errors here
    }
  };

  const getFileName = uri => {
    // Function to extract file name from URI
    if (uri) {
      const path = uri.split('/');
      return path[path.length - 1];
    }
    return '';
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F9FBFD'}}>
      <View style={{paddingHorizontal: 15}}>
        <View style={styles.centeredContainer}>
          <TouchableOpacity
            onPress={() => toggleModal('camera')}
            style={[
              styles.uploadIconCard,
              photoUri && styles.uploadIconCardClicked,
            ]}>
            <Image
              source={
                photoUri
                  ? {uri: `file://${photoUri}`}
                  : require('../images/cameraIcon.png')
              }
              style={[
                styles.uploadIcon,
                photoUri && styles.uploadsmallIconClicked,
              ]}
            />
            {!photoUri && <Text style={styles.uploadTextUpper}>Add Icon</Text>}
          </TouchableOpacity>
        </View>

        <View style={styles.textInputDiv}>
          <Text style={styles.formTitle}>Delivery Preferance title</Text>
          <TextInput
            style={styles.loginput}
            placeholder="Type here.."
            placeholderTextColor="#999"
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </View>

        <View style={styles.textInputDiv}>
          <Text style={styles.formTitle}>Delivery Preferance Discription</Text>
          <TextInput
          style={styles.loginput}
          placeholder="Type here.."
          placeholderTextColor="#999"
          value={capacity}
          onChangeText={text => setCapacity(text)}
          />
        </View>

        <View>
          <View style={styles.bookAddress}>
            <Text style={styles.cardTitle}>Make this Delivery Preferance</Text>
            <TouchableOpacity onPress={togglePromoEmails}>
              <MaterialCommunityIcons
                name={promoEmails ? 'toggle-switch' : 'toggle-switch-off'}
                size={60}
                color={promoEmails ? '#1D374E' : '#D3D3D3'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.saveBTn}>
          <Text style={styles.okButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <ChoosePhotoByCameraGallaryModal
        visible={isModalVisibleCamera}
        handlePhotoOpenClose={handlePhotoOpenClose}
        handleCameraLaunch={handleCameraLaunch}
        handleImageLibraryLaunch={handleImageLibraryLaunch}
      />
    </ScrollView>
  );
};

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
  },
  uploadIconCard: {
    width: 170,
    height: 170,
    borderWidth: 1,
    borderColor: '#371B344D',
    borderStyle: 'dashed',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  uploadTextUpper: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
  },
  textInputDiv: {
    marginTop: 10,
  },
  loginput: {
    fontSize: 12,
    width: '100%',
    fontFamily: 'Montserrat-Regular',
    borderRadius: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#2C303336',
  },
  formTitle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    marginBottom: 5,
  },
  inputTextStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    color: colors.text,
    borderRadius: 5,
    padding: 10,
    fontFamily: 'Montserrat-Regular',
  },
  cardTitle: {
    fontSize: 14,
    flex: 1,
    color: colors.text,
    fontFamily: 'Montserrat-Medium',
  },
  buttonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 30,
    backgroundColor: colors.white,
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 0.5, // for Android
    marginTop: 1,
  },
  logbutton: {
    width: '45%',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: colors.text,
  },
  buttonText: {
    fontSize: 14,
    color: colors.text,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
  },
  okButton: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    color: colors.white,
  },
  saveBTn: {
    borderRadius: 8,
    padding: 15,
    backgroundColor: colors.primary,
    marginVertical: 20,
  },
  uploadIcon: {},
  uploadIconCardClicked: {
    borderWidth: 0,
    marginVertical: 20,
  },
  uploadsmallIconClicked: {
    width: 170,
    height: 170,
    borderRadius: 100,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddDeliveryPreferance;
