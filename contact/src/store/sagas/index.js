import axios from 'axios';
import {put, call, takeLatest} from 'redux-saga/effects';
import {SAGA, ACTION} from '../types';

//const ASCII_API = 'https://jsonplaceholder.typicode.com/users'
const ASCII_API = 'https://simple-contact-crud.herokuapp.com/contact';

const fetching = () => {
  return axios({
    method: 'GET',
    url: ASCII_API,
  })
    .then(({data}) => data.data)
    .catch((err) => err.message);
};

function* gettingData() {
  yield put({type: ACTION.SET_LOADING, payload: true});
  try {
    const payload = yield call(fetching);
    yield put({type: ACTION.GET_DATA_SUCCESS, payload});
  } catch (err) {
    console.log('gettingData:', err);
  }
  yield put({type: ACTION.SET_LOADING, payload: false});
}

export default function* rootSaga() {
  yield takeLatest(SAGA.FETCH_REQUESTED, gettingData);
}
