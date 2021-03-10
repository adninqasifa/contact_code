import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import Card from '../components/Card';
import {useSelector, useDispatch} from 'react-redux';
//import axios from 'axios';
import {fetch_api} from '../store/actions';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MainPage = (props) => {
  const [kontak, setKontak] = useState([]);
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state) => state.details);
  //console.log('==>', data);
  const detailsContact = useSelector((state) => state.details);
  //console.log('==>', detailsContact);

  const dispatchRedux = () => {
    dispatch(fetch_api());
  };

  useEffect(() => {
    dispatchRedux();
  }, []);

  function kartu() {
    const renderItem = ({item, index}) => {
      return (
        <View>
          <Card
            photo={item.photo}
            firstName={item.firstName}
            lastName={item.lastName}
            age={item.age}
            id={item.id}
          />
        </View>
      );
    };
    return (
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>CONTACT</Text>
      </View>

      <View>
        <View style={styles.iconSearch}>
          <Entypo name="magnifying-glass" size={25} color="black" />
        </View>

        <TextInput
          placeholder="Search"
          style={styles.searchbar}
          lightTheme
          default
          placeholderTextColor="black"
          onChangeText={(text) => {
            let aaaa = kontak.filter((e) =>
              e.firstName.toLowerCase().includes(text.toLowerCase()),
            );
            console.log('ini testing 2', kontak);

            if (text.length === 0) {
              setKontak(detailsContact);
              console.log('hahaha', detailsContact);
            } else {
              setKontak(aaaa);
            }
          }}
        />
      </View>
      {kartu()}
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#343434',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#343434',
    alignItems: 'center',
    marginBottom: 10,
  },
  textHeader: {
    flex: 4,
    color: '#FFFFFF',
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  searchbar: {
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  iconSearch: {
    position: 'absolute',
    right: wp('5%'),
    top: hp('6%'),
  },
});
