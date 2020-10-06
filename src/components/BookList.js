import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = ({ books }) => (
  <table>
    { console.log(books) }
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    { books.map(item => (
      <Book
        key={item.id}
        book={{
          id: item.id,
          title: item.title,
          category: item.category,
        }}
      />
    ))}
  </table>
);

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

export default connect(mapStateToProps, null)(BookList);
