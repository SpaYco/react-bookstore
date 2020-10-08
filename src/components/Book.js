import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.bookRemover = this.bookRemover.bind(this);
  }

  bookRemover() {
    const { id, removeOldBook } = this.props;
    removeOldBook(id);
  }

  render() {
    const { id, title, category } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td><input type="submit" value="X" onClick={this.bookRemover} /></td>
      </tr>
    );
  }
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeOldBook: PropTypes.func.isRequired,
};

export default Book;
