import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import './styles.css';
import Header from '../Header/Header';
import Sort from '../Sort/Sort';
import List from '../List/List';
import Pagination from '../Pagination/Pagination';

class App extends Component {
  componentDidMount() {
    const { fetchList } = this.props;
    fetchList();
  }

  render() {
    const {
      cards,
      authenticated,
      // token,
      // loadingCards,
      // errorCards,
      errorLogin,
      tasksCount,
      fetchList,
      logout,
      login,
    } = this.props;
    return (
      <>
        <Header
          logout={logout}
          login={login}
          errorLogin={errorLogin}
          authenticated={authenticated}
        />
        <Sort fetchList={fetchList} />
        {cards && <List listCards={cards} />}
        <Pagination pageCount={+tasksCount} fetchList={fetchList} />
        <ToastContainer />
      </>
    );
  }
}

App.propTypes = {
  fetchList: PropTypes.func.isRequired,
};

export default App;
