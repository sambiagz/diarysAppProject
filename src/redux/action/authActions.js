import * as ActionTypes from './actions.types';

export const loginUser = ({email, password}) => {
  // console.log(`Email ${email} and Password ${password} passed to redux`);
  return {
    type: ActionTypes.SignIn,
    payload: {email, password},
  };
};
