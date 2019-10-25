import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Lists from '../Lists/ListsContainer.js';

// type AppProps = {
//   loading: boolean;
//   error: boolean;
//   profile: string;
//   fetchCards: any;
//   fetchProfile: any;
// };

const App = ({ fetchCards, fetchProfile, profile }) => {
  useEffect(() => {
    fetchCards();
    fetchProfile();
  }, []);

  return (
    <>
      <Header profile={profile} />
      <Lists />
      <ToastContainer />
    </>
  );
};

App.defaultProps = {
  profile: { name: '...', surname: '...' },
};

App.propTypes = {
  fetchCards: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.objectOf(PropTypes.any),
};

export default App;
