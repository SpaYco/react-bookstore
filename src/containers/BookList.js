/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BookList = ({ books, handleBookRemove }) => {
  const getBooks = () => {
    const result = [];
    for (let i = 0; i < books.length; i += 1) {
      result.push(
        <Book
          key={i}
          id={books[i].id}
          title={books[i].title}
          category={books[i].category}
          removeOldBook={handleBookRemove}
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
          <th>Remove Book</th>
        </tr>
      </thead>
      <tbody>{getBooks()}</tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
  handleBookRemove: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  handleBookRemove: state => {
    dispatch(removeBook(state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
