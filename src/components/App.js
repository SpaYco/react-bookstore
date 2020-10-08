import React from 'react';
import '../App.css';
import BooksForm from '../containers/BookForm';
import BooksList from '../containers/BookList';

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
