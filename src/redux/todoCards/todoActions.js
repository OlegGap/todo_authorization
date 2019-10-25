export const Type = {
  FETCH_CARDS_START: 'FETCH_CARDS_START',
  FETCH_CARDS_SUCCESS: 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR: 'FETCH_CARDS_ERROR',

  ADD_CARD_START: 'ADD_CARD_START',
  ADD_CARD_ERROR: 'ADD_CARD_ERROR',
  ADD_CARD_SUCCESS: 'ADD_CARD_SUCCESS',

  MODIFY_CARD: 'MODIFY_CARD_SUCCESS',
  REMOVE_CARD: 'REMOVE_CARD_SUCCESS',
  ADD_LIST: 'ADD_LIST',
};

export const fetchCardsStart = () => ({
  type: Type.FETCH_CARDS_START,
});

export const fetchCardsSuccess = cards => ({
  type: Type.FETCH_CARDS_SUCCESS,
  payload: { cards },
});

export const fetchCardsError = error => ({
  type: Type.FETCH_CARDS_ERROR,
  payload: { error },
});

export const addCardStart = () => ({
  type: Type.ADD_CARD_START,
});

export const addCardSuccess = cards => ({
  type: Type.ADD_CARD_SUCCESS,
  payload: { cards },
});

export const addCardError = error => ({
  type: Type.ADD_CARD_ERROR,
  payload: { error },
});
