import { combineReducers } from 'redux';
import { Type } from './todoActions';

const cardsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_CARDS_SUCCESS:
      return payload.cards;

    case Type.REMOVE_CARD_SUCCESS:
      return state.filter(item => item.id !== payload.id);

    case Type.ADD_CARD_SUCCESS:
      return [...state, payload.cards];

    // case Type.MODIFY_CARD_SUCCESS:
    //   return [...state, payload.post];

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case Type.FETCH_CARDS_START:
    case Type.ADD_CARD_START:
      return false;
    case Type.FETCH_CARDS_SUCCESS:
    case Type.ADD_CARD_SUCCESS:
      return true;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.FETCH_CARDS_START:
    case Type.ADD_CARD_START:
      return state;
    case Type.FETCH_CARDS_ERROR:
    case Type.ADD_CARD_ERROR:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  list: cardsReducer,
  loading: loadingReducer,
  error: errorReducer,
});
