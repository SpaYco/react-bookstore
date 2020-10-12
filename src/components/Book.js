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
      <div className="book-container flex">
        <div className="title-container ">
          <div className="category">{category}</div>
          <div className="title">{title}</div>
          <div className="author">Author</div>
          <div className="btns flex">
            <p>Comments</p>
            <button type="button" onClick={this.bookRemover}>Remove</button>
            <p>Edit</p>
          </div>
        </div>
        <div className="right-container flex">
          <div className="progress-panel flex">
            <div className="progress" />
            <div className="progress-details v-flex">
              <h2>
                {id}
                %
              </h2>
              <p>Completed</p>
            </div>
          </div>
        </div>
      </div>
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
