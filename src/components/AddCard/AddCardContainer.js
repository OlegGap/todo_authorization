import { connect } from 'react-redux';
import * as todoOperations from '../../redux/todoCards/todoOperations';
import {
  getLoading,
  getError,
  getLists,
} from '../../redux/todoCards/todoSelectors';
import AddCard from './AddCard.jsx';

const mapStateToProps = state => ({
  loading: getLoading(state),
  error: getError(state),
  lists: getLists(state),
});

const mapDispatchToProps = {
  addCard: todoOperations.addCard,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCard);
