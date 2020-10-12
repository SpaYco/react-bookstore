/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, handleBookRemove, filter, handleFilterChange,
}) => {
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
    <div className="list-container v-flex">
      <CategoryFilter changeFilter={handleFilterChange} />
      {getBooks()}
      <hr />
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
  filter: PropTypes.string.isRequired,
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
