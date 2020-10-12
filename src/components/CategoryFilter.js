import React from 'react';
import PropTypes from 'prop-types';

const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

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

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.bookFilter = this.bookFilter.bind(this);
  }

  bookFilter(event) {
    const { changeFilter } = this.props;
    changeFilter(event.target.value);
  }

  render() {
    return (
      <div className="cat-list">
        <select onChange={this.bookFilter} name="categories" id="categories" defaultValue="All">
          {getCategories()}
        </select>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
