import axios from 'axios';
import qs from 'qs';
import {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
} from './sesionActions';

const DEFAULT_URL =
  'https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=Oleg';

export const login = props => dispatch => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(props),
    url: DEFAULT_URL,
  };
  dispatch(loginRequest());
  axios(options).then(({ data }) => {
    if (data.status === 'ok') {
      return dispatch(loginSuccess(data));
    }
    return dispatch(loginError(data.message));
  });
};

export const logout = () => dispatch => {
  dispatch(logoutRequest());
};
