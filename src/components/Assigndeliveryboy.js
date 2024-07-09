import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../colors';

const Assigndeliveryboy = ({navigation}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = index => {
    setSelectedCard(index);
  };

  const deliveryBoys = [
    {
      image: require('../images/deliveryboyImage.jpeg'),
      name: 'Mike Anthony',
      vehicle: 'Mini Truck, Scooter, Partner',
    },
    {
      image: require('../images/deliveryboyImage.jpeg'),
      name: 'John Doe',
      vehicle: 'Bicycle, Scooter, Walker',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {deliveryBoys.map((boy, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.requesterCard,
              selectedCard === index && styles.selectedCard,
            ]}
            onPress={() => handleCardSelect(index)}>
            <View>
              <Image style={styles.requesterImage} source={boy.image} />
            </View>
            <View style={styles.requesterInfo}>
              <Text style={styles.requesterName}>{boy.name}</Text>
              <Text style={styles.vehicle}>{boy.vehicle}</Text>
            </View>
            {selectedCard === index ? (
              <FontAwesome name="dot-circle-o" size={25} color="#1D374E" />
            ) : (
              <FontAwesome name="circle-thin" size={25} color="#1D374E" />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.allBtnCards}>
            <TouchableOpacity
              onPress={() => navigation.navigate('')}
              style={styles.ignoreBtn}>
              <Text style={styles.actionIgnore}>Assign delivery boy</Text>
            </TouchableOpacity>
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFD',
    height: '100%',
    width: '100%',
  },
  content: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  requesterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0.0625,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 0.5,
  },
  selectedCard: {
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  requesterImage: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },
  requesterInfo: {
    flex: 1,
    marginLeft: 10,
  },
  requesterName: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.text,
  },
  vehicle: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: colors.text,
  },
  ignoreBtn: {
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  actionIgnore: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: colors.text,
    textAlign: 'center',
  },
  allBtnCards: {
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
    elevation: 0.5,
    marginTop: 10,
  },
});

export default Assigndeliveryboy;
