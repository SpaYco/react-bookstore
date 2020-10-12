import React from 'react';
import '../App.css';
import BooksForm from '../containers/BookForm';
import BooksList from '../containers/BookList';
import NavBar from './NavBar';

const App = () => (
  <div className="App">
    <NavBar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
