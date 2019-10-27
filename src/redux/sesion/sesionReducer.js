import { combineReducers } from 'redux';
import { ActionType } from './sesionActions';

const authenticated = (state = false, { type }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
      return true;

    case ActionType.LOGOUT:
      return false;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_SUCCESS:
      return payload.profile.message.token;

    case ActionType.LOGOUT:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ActionType.LOGIN_ERROR:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  authenticated,
  token,
  error,
});
