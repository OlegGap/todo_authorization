import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import './styles.css';
import Header from '../Header/Header';
import Sort from '../Sort/Sort';
import List from '../List/List';
import Pagination from '../Pagination/Pagination';

class App extends Component {
  componentDidMount() {
    const { fetchList, fetchAuthenticated } = this.props;

    if (Cookies.get('authenticated')) {
      fetchAuthenticated(Cookies.get('authenticated'));
    }
    fetchList();
  }

  render() {
    const {
      cards,
      authenticated,
      errorLogin,
      tasksCount,
      fetchList,
      modifyCard,
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
        {cards && (
          <List
            listCards={cards}
            authenticated={authenticated}
            modifyCard={modifyCard}
          />
        )}
        <Pagination pageCount={+tasksCount / 3} fetchList={fetchList} />
        <ToastContainer />
      </>
    );
  }
}

export default App;
