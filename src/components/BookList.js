/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books }) => {
  console.log(books);
  const getBooks = () => {
    const result = [];
    for (let i = 0; i < books.length; i += 1) {
      result.push(
        <Book
          key={books[i].id}
          id={books[i].id}
          title={books[i].title}
          category={books[i].category}
        />,
      );
    }
    return result;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>{getBooks()}</tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.array,
};
BookList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({ books: state.books });
export default connect(mapStateToProps, null)(BookList);
