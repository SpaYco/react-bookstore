import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filters';

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

export default rootReducer;
