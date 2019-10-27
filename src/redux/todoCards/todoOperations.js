import axios from 'axios';
import {
  fetchListStart,
  fetchListSuccess,
  fetchListError,
  addCardStart,
  addCardSuccess,
  addCardError,
} from './todoActions.js';

export const fetchList = (
  page = 1,
  sortField = 'id',
  sortDirection = 'asc',
) => dispatch => {
  dispatch(fetchListStart());
  axios
    .get(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Oleg&sort_field=${sortField}&sort_direction=${sortDirection}&page=${page}`,
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
      'https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Oleg',
      data,
    )
    .then(response => {
      dispatch(addCardSuccess(response.data));
    })
    .catch(error => {
      dispatch(addCardError(error));
    });
};
