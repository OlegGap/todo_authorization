import { connect } from 'react-redux';
import * as todoOperations from '../../../redux/todoCards/todoOperations';
import {
  getLoadingCards,
  getErrorCards,
} from '../../../redux/todoCards/todoSelectors';
import AddCard from './AddCard.jsx';

const mapStateToProps = state => ({
  loading: getLoadingCards(state),
  error: getErrorCards(state),
});

const mapDispatchToProps = {
  addCard: todoOperations.addCard,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCard);
