import React from 'react';
import './App.css';
import BooksForm from './components/BookForm';
import BooksList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
