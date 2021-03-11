import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

const Card = ({photo, firstName, lastName, age}) => {
  const [modalBooking, setModalBooking] = useState(false);
  const [photos, setPhotos] = useState('');
  const [firstNames, setFirstNames] = useState('');
  const [lastNames, setLastNames] = useState('');
  const [ages, setAges] = useState('');

  const datab = useSelector((state) => state.details);
  //console.log('==>', datab);

  return (
    <TouchableOpacity
      style={styles.border}
      onPress={() => {
        setModalBooking(true);
        setPhotos(datab.photo);
        setFirstNames(datab.firstName);
        setLastNames(datab.lastName);
        setAges(datab.age);
      }}>
      <ImageBackground
        style={{flex: 1}}
        source={
          photo === 'N/A' ? require('../assets/images/bg.png') : {uri: photo}
        }>
        <View style={styles.overlay}>
          <Image
            style={styles.photo}
            source={
              photo === 'N/A'
                ? require('../assets/images/user.png')
                : {uri: photo}
            }
          />
          <View style={{margin: 10, alignSelf: 'center'}}>
            <Text style={styles.text}>
              {firstName} {lastName}
            </Text>
            {/*<Text style={styles.text}>AGE: {age}</Text>*/}
          </View>
        </View>
      </ImageBackground>

      <Modal animationType="slide" transparent={true} visible={modalBooking}>
        <View style={styles.centeredView}>
          <TouchableOpacity
            style={styles.modalBooking}
            onPress={() => {
              setModalBooking(!modalBooking);
            }}>
            <Image
              style={{width: 200, height: 200, borderRadius: 100}}
              source={
                photo === 'N/A'
                  ? require('../assets/images/user.png')
                  : {uri: photo}
              }
            />
            <View style={styles.borderModal}>
              <Text style={styles.name}>
                {firstName} {lastName}
              </Text>
              <Text style={styles.age}>Age: {age}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  border: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(52,52,52,0.8)',
    flexDirection: 'row',
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  borderModal: {
    borderColor: '#FFFFFF',
    backgroundColor: '#343434',
    borderWidth: 5,
    borderRadius: 15,
    alignItems: 'center',
    margin: 5,
  },

  name: {
    marginHorizontal: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  age: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
  },
  biodata: {
    alignSelf: 'flex-start',
    marginHorizontal: 5,
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBooking: {
    backgroundColor: '#343434',
    margin: 20,
    borderRadius: 20,
    borderWidth: 5,
    padding: 10,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});
