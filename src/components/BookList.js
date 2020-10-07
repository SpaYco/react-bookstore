import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = ({ books }) => (
  <table>
    <thead>
      <th>ID</th>
      <th>Title</th>
      <th>Category</th>
    </thead>
    <tbody>
      {console.log({books})

      }

    </tbody>

  </table>
);

const mapStateToProps = state => ({ books: state.books });
export default connect(mapStateToProps, null)(BookList);
