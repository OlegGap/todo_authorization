import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';
import {
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  authenticatedSuccess,
} from './sesionActions';

const DEFAULT_URL =
  'https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=Olegg';

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
      Cookies.set('authenticated', data.message.token, { expires: 1 });
      return dispatch(loginSuccess(data));
    }
    return dispatch(loginError(data.message));
  });
};

export const fetchAuthenticated = token => dispatch => {
  dispatch(authenticatedSuccess(token));
};

export const logout = () => dispatch => {
  Cookies.remove('authenticated');
  dispatch(logoutRequest());
};
