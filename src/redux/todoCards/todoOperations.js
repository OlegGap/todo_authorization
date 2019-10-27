import axios from 'axios';
import {
  fetchListStart,
  fetchListSuccess,
  fetchListError,
  addCardStart,
  addCardSuccess,
  addCardError,
} from './todoActions.js';

export const fetchList = page => dispatch => {
  dispatch(fetchListStart());
  axios
    .get(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Oleg&page=${page}`,
    )
    .then(response => {
      return dispatch(fetchListSuccess(response.data.message));
    })
    .catch(error => {
      dispatch(fetchListError(error));
    });
};

export const addCard = data => dispatch => {
  dispatch(addCardStart());
  axios
    .post(
      'https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Name',
      data,
    )
    .then(response => {
      dispatch(addCardSuccess(response.data));
    })
    .catch(error => {
      dispatch(addCardError(error));
    });
};
