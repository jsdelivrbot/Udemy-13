import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  //here action.payload is object due to redux-promise
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.push(action.payload.data);
      //bad! don't mutate the original state directly
      //instead, return a new instance of state
      return [action.payload.data, ...state];
      //return state.concat([action.payload.data]);
  }
  return state;
}
