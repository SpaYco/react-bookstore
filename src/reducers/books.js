import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const INITIAL_STATE = [{
  id: 1,
  title: 'Romeo and Juliet',
  category: 'Action',
},
{
  id: 2,
  title: 'How to cook your first tomato soup - Practical guide',
  category: 'Learning',
},
{
  id: 3,
  title: 'Everything you need to know about startups',
  category: 'Learning',
},
];

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default booksReducer;
