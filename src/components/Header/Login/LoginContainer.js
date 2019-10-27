import { connect } from 'react-redux';
import loginRequest from '../../../redux/sesion/sesionOperations';
import {
  getAuthenticated,
  getError,
  getToken,
} from '../../../redux/sesion/sesionSelectors';
import Login from './Login.jsx';

const mapStateToProps = state => ({
  authenticated: getAuthenticated(state),
  token: getToken(state),
  error: getError(state),
});

const mapDispatchToProps = {
  loginRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
