import { combineReducers } from 'redux';
import { Type } from './profileActions';

const cardsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_PROFILE_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.FETCH_PROFILE_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  profile: cardsReducer,
  error: errorReducer,
});
