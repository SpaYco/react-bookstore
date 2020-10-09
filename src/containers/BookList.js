/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({ books, handleBookRemove, filter, handleFilterChange }) => {
  const getBooks = () => {
    const result = [];
    for (let i = 0; i < books.length; i += 1) {
      if (books[i].category === filter || filter === 'All') {
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
    }
    return result;
  };

  return (
    <div>
      <CategoryFilter changeFilter={handleFilterChange} />
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
    </div>
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
  handleFilterChange: PropTypes.func.isRequired,
};

BookList.defaultProps = {
  books: [],
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  handleBookRemove: book => {
    dispatch(removeBook(book));
  },
  handleFilterChange: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
