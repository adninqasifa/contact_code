import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import Card from '../components/Card';
import {useSelector, useDispatch} from 'react-redux';
import {fetch_api} from '../store/actions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MainPage = (props) => {
  const [kontak, setKontak] = useState([]);
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.details);
  //console.log('==>', data);

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
    right: wp('2%'),
    top: hp('2%'),
    zIndex: 1,
  },
});
