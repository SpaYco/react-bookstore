import React from 'react';
import './App.css';
import BooksForm from './components/BookForm';
import BooksList from './components/BookList';

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
