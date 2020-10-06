import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [{ id: 1, title: 'Harry Potter', category: 'Magic' }];
const booksReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CREATE_BOOK:
      return [...state, actions];
    case REMOVE_BOOK:
      return [...state, actions];
    default:
      return state;
  }
};

export default booksReducer;
