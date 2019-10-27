import { connect } from 'react-redux';
import * as todoOperations from '../../redux/todoCards/todoOperations';
import { logout, login } from '../../redux/sesion/sesionOperations';

import {
  getLoadingCards,
  getErrorCards,
  getCards,
  getTasksCount,
} from '../../redux/todoCards/todoSelectors';
import {
  getAuthenticated,
  getErrorLogin,
  getToken,
} from '../../redux/sesion/sesionSelectors';
import App from './App.jsx';

const mapStateToProps = state => ({
  cards: getCards(state),
  tasksCount: getTasksCount(state),
  authenticated: getAuthenticated(state),
  token: getToken(state),
  loadingCards: getLoadingCards(state),
  errorCards: getErrorCards(state),
  errorLogin: getErrorLogin(state),
});

const mapDispatchToProps = {
  fetchList: todoOperations.fetchList,
  logout,
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
