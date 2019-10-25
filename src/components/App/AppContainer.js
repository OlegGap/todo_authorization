import { connect } from 'react-redux';
import * as todoOperations from '../../redux/todoCards/todoOperations';
import fetchProfile from '../../redux/profile/profileOperations';
import {
  getLoading,
  getError,
  getProfile,
} from '../../redux/todoCards/todoSelectors';
import App from './App.jsx';

const mapStateToProps = state => ({
  loading: getLoading(state),
  error: getError(state),
  profile: getProfile(state),
});

const mapDispatchToProps = {
  fetchCards: todoOperations.fetchCards,
  fetchProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
