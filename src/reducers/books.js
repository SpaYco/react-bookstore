import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const INITIAL_STATE = [{
  id: Math.floor(Math.random() * Math.floor(50)),
  title: 'Harry Potter',
  category: 'Sci-Fi',
},
{
  id: Math.floor(Math.random() * Math.floor(50)),
  title: 'Learn React in 5 hours',
  category: 'Learning',
},
{
  id: Math.floor(Math.random() * Math.floor(50)),
  title: 'This Book Love You',
  category: 'Learning',
},
];

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, state.length),
      ];
    default:
      return state;
  }
};

export default booksReducer;
