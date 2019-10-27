import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Paginatin.module.css';

const Pagionation = ({ fetchList, pageCount }) => {
  const handlePageClick = data => {
    fetchList(data.selected);
  };
  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={styles.container}
      activeClassName={styles.active}
      pageClassName={styles.disabled}
    />
  );
};

export default Pagionation;
