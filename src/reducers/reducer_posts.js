import _ from 'lodash';
import { FETCH_POST, FETCH_POSTS } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = {...state};
      // newState[post.id] = post;
      // return newState;
      //With ES6 syntax, we are doing the same thing above with our return
      //statement below!
      return {...state, [action.payload.data.id]: action.payload.data}
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
