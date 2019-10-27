import axios from 'axios';
import qs from 'qs';
import { loginRequest, loginSuccess, loginError } from './sesionActions';

export default props => dispatch => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(props),
    url:
      'https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=Oleg',
  };
  dispatch(loginRequest());
  axios(options).then(({ data }) => {
    if (data.status === 'ok') {
      return dispatch(loginSuccess(data));
    }
    return dispatch(loginError(data.message));
  });
};
