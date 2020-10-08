import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

const Book = ({
  id, title, category, key, removeOldBook,
}) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td><input type="submit" value="X" onClick={removeOldBook(key)} /></td>
  </tr>
);

Book.propTypes = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeOldBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeOldBook: state => {
    dispatch(removeBook(state));
  },
});

export default connect(null, mapDispatchToProps)(Book);
