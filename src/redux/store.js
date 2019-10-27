import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import todoCardReducer from './todoCards/todoReducer';
import sesionReducer from './sesion/sesionReducer';

const rootReducer = combineReducers({
  todo: todoCardReducer,
  sesion: sesionReducer,
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
