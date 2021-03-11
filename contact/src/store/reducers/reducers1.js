import {ACTION} from '../types';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

const reducer1 = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ACTION.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case ACTION.GET_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default reducer1;
