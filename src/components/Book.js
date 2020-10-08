import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/index';

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

const mapDispatchToProps = dispatch => ({
  removeOldBook: state => {
    dispatch(removeBook(state));
  },
});

export default connect(null, mapDispatchToProps)(Book);
