import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import List from '../List/List';
import Pagination from '../Pagination/Pagination';

const App = ({ fetchList, cards, tasksCount }) => {
  useEffect(() => {
    fetchList(2);
  }, []);

  return (
    <>
      <Header />
      {cards && <List listCards={cards} />}
      <Pagination pageCount={+tasksCount} fetchList={fetchList} />
      <ToastContainer />
    </>
  );
};

App.propTypes = {
  fetchList: PropTypes.func.isRequired,
};

export default App;
