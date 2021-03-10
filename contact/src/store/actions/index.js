import {SAGA} from '../types';

export function fetch_api(data = []) {
  return {type: SAGA.FETCH_REQUESTED, payload: data};
}

export const chVisibility = (payload) => {
  return {type: ACTION.SET_VISIBILITY, payload: payload};
};
