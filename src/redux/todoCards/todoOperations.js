import axios from 'axios';
import qs from 'qs';
import {
  fetchListStart,
  fetchListSuccess,
  fetchListError,
  addCardStart,
  addCardSuccess,
  addCardError,
  modifyCardSuccess,
} from './todoActions.js';

const resultProps = { page: 1, sortField: 'id', sortDirection: 'asc' };

export const fetchList = (page, sortField, sortDirection) => dispatch => {
  dispatch(fetchListStart());
  resultProps.page = page || resultProps.page;
  resultProps.sortField = sortField || resultProps.sortField;
  resultProps.sortDirection = sortDirection || resultProps.sortDirection;

  axios
    .get(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Olegg&sort_field=${resultProps.sortField}&sort_direction=${resultProps.sortDirection}&page=${resultProps.page}`,
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
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url:
      'https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=Olegg',
  };
  axios(options)
    .then(response => {
      dispatch(addCardSuccess(response.data));
    })
    .catch(error => {
      dispatch(addCardError(error));
    });
};

export const modifyCard = data => dispatch => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url: `https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${data.id}?developer=Olegg`,
  };
  axios(options).then(response => {
    dispatch(modifyCardSuccess(response.data));
  });
};
