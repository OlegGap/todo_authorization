import { connect } from 'react-redux';
import * as todoOperations from '../../redux/todoCards/todoOperations';
import {
  logout,
  login,
  fetchAuthenticated,
} from '../../redux/sesion/sesionOperations';
import { getCards, getTasksCount } from '../../redux/todoCards/todoSelectors';
import {
  getAuthenticated,
  getErrorLogin,
} from '../../redux/sesion/sesionSelectors';
import App from './App.jsx';

const mapStateToProps = state => ({
  cards: getCards(state),
  tasksCount: getTasksCount(state),
  authenticated: getAuthenticated(state),
  errorLogin: getErrorLogin(state),
});

const mapDispatchToProps = {
  fetchList: todoOperations.fetchList,
  modifyCard: todoOperations.modifyCard,
  logout,
  login,
  fetchAuthenticated,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
