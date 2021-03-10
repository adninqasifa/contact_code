import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
//import {useNavigation} from '@react-navigation/native';

import {chVisibility} from '../store/actions';

const ModalDatabase = ({
  nama,
  gambar,
  tanggal,
  telepon,
  alamat,
}) => {
  const [modalBooking, setModalBooking] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const modalDetails = useSelector((s) => s.reducers1);
  //const navigation = useNavigation();

  //console.log("Ini Nama", modalDetails.data.nama);
  //console.log('Ini Nama', modalDetails);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalDetails.visible}>
      <View style={styles.centeredView}>
        <TouchableOpacity
          onPress={() => {
            dispatch(chVisibility({show:false,id:0}));
          }}
          style={styles.modalBooking}>
          <Image style={{width: 200, height: 200, borderRadius: 100}} source={modalDetails.data[modalDetails.id].photo} />
          <View style={styles.border}>
            <Text style={styles.biodataTitle}>{modalDetails.data[modalDetails.id].firstName}</Text>
            <Text style={styles.biodataSubTitle}>Birth of Date: </Text>
            <Text style={styles.biodata}>{modalDetails.data[modalDetails.id].lastName}</Text>
            <Text style={styles.biodataSubTitle}>Phone:</Text>
            <Text style={styles.biodata}>{modalDetails.data[modalDetails.id].age}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalDatabase;

const styles = StyleSheet.create({
  border: {
    borderColor: '#808080',
    backgroundColor: '#343434',
    borderWidth: 5,
    borderRadius: 15 ,
    alignItems: 'center',
    margin: 5,
  },
  biodataTitle: {
    alignItems: 'center',
    marginHorizontal: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#808080',
  },
  biodataSubTitle: {
    alignSelf: 'flex-start',
    marginHorizontal: 5,
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});
