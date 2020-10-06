import React from 'react';
import Book from './Book';

const BookList = () => (
  <table>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <Book book={{ id: 0, title: 'harry potter', category: 'magic' }} />
  </table>
);

export default BookList;
