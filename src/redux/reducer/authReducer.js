import * as ActionType from '../action/actions.types';

const initialState = {
  token: '',
  user: '',
  isSingingIn: false,
  siginInSuccess: null,
  signInFailure: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_TOKEN:
      return {...state, token: action.payload.token};
    case ActionType.SET_USER:
      return {...state, user: action.payload.user};
    case ActionType.SIGIN_START:
      return {...state, isSingingIn: true};
    case ActionType.SIGIN_SUCCESS:
      return {...state, isSingingIn: false, signInSuccess: true};
    case ActionType.signInFailure:
      return {...state, signInFailure: true, isSingingIn: false};
    default:
      return state;
  }
};

export default loginReducer;
