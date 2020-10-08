import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const getCategories = () => {
  const result = [];
  for (let i = 0; i < categories.length; i += 1) {
    result.push(
      <option key={categories[i]} value={categories[i]}>
        {categories[i]}
      </option>,
    );
  }
  return result;
};

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'title') {
      this.setState({ title: event.target.value });
    } else if (event.target.name === 'categories') {
      this.setState({
        id: Math.floor(Math.random() * Math.floor(50)),
        category: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    const { createNewBook } = this.props;

    if (title === '' || category === '') {
      const msg = 'Please fill in the inputs';
      document.getElementById('warning').innerHTML = msg;
    } else {
      createNewBook(this.state);
      document.getElementById('form').reset();
      this.setState({ id: '', title: '', category: '' });
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form id="form">
        <label htmlFor="title">
          title
          <input
            onChange={this.handleChange}
            id="title"
            name="title"
            type="text"
            value={title}
          />
        </label>
        <select onChange={this.handleChange} name="categories" id="categories" defaultValue="default">
          <option disabled value="default">
            {' '}
            -- select an option --
            {' '}
          </option>
          {getCategories()}
        </select>
        <input onClick={this.handleSubmit} type="submit" />
        <div id="warning" />
      </form>
    );
  }
}

BookForm.propTypes = {
  createNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createNewBook: state => {
    dispatch(createBook(state));
  },
});

export default connect(null, mapDispatchToProps)(BookForm);
