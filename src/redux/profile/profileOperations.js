import axios from 'axios';
import {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileError,
} from './profileActions';

export default () => dispatch => {
  dispatch(fetchProfileStart());
  axios
    .get('http://localhost:8086/profile/')
    .then(response => {
      dispatch(fetchProfileSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchProfileError(error));
    });
};
