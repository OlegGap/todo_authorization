import { connect } from 'react-redux';
import * as todoOperations from '../../redux/todoCards/todoOperations';
import {
  getLoading,
  getError,
  getCards,
  getTasksCount,
} from '../../redux/todoCards/todoSelectors';
import App from './App.jsx';

const mapStateToProps = state => ({
  cards: getCards(state),
  tasksCount: getTasksCount(state),
  loading: getLoading(state),
  error: getError(state),
});

const mapDispatchToProps = {
  fetchList: todoOperations.fetchList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
