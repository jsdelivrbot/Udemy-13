import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
      //_.mapKeys convert an array of objects into an object of objects
      //with the key selected from the object items (here is id)
      break;
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };
      break;
    case DELETE_POST:
    //delete the post by its id from the local state as well
      return _.omit(state, action.payload);
      break;
    default:
      return state;
  }
}
