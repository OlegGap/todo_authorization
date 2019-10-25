import axios from 'axios';
import {
  fetchCardsStart,
  fetchCardsSuccess,
  fetchCardsError,
  addCardStart,
  addCardSuccess,
  addCardError,
} from './todoActions.js';

export const fetchCards = () => dispatch => {
  dispatch(fetchCardsStart());
  axios
    .get('http://localhost:8086/lists/')
    .then(response => {
      dispatch(fetchCardsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchCardsError(error));
    });
};

export const addCard = data => dispatch => {
  dispatch(addCardStart());
  axios
    .post('http://localhost:8086/lists/', data)
    .then(response => {
      dispatch(addCardSuccess(response.data));
    })
    .catch(error => {
      dispatch(addCardError(error));
    });
};
