import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import todoCardReducer from './todoCards/todoReducer';
import profileReducer from './profile/profileReducer';

const rootReducer = combineReducers({
  todo: todoCardReducer,
  profile: profileReducer,
});

const middleware = [ReduxThunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
