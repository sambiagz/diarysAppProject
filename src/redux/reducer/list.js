import {ADD_TOKEN, ADD_USER, DELET_DIARY} from '../action/actions.types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case ADD_TOKEN:
      return [...state, action.payload];
    case DELET_DIARY:
      return state.filter((diary) => diary.public_id !== action.payload);
    default:
      return state;
      break;
  }
};
