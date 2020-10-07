import React from 'react';

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

const BookForm = () => (
  <form>
    <label htmlFor="title">
      title
      <input id="title" name="title" type="text" />
    </label>
    <select name="categories" id="categories">
      {getCategories()}
    </select>
    <input type="submit" />
  </form>
);

export default BookForm;
