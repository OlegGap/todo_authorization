import { connect } from 'react-redux';
import * as todoOperations from '../../redux/todoCards/todoOperations';
import {
  getLoading,
  getError,
  getLists,
} from '../../redux/todoCards/todoSelectors';
import Lists from './Lists.jsx';

const mapStateToProps = state => ({
  loading: getLoading(state),
  error: getError(state),
  lists: getLists(state),
});

const mapDispatchToProps = {
  fetchLists: todoOperations.fetchCards,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lists);
