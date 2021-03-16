import * as ActionTypes from '../action/actions.types';

const initialState = {
  project: null,
  diary: null,
  selectedProject: null,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PROJECT:
      return {...state, project: action.payload.project};
    case ActionTypes.SET_DIARY:
      return {...state, diary: action.payload.diary};
    case ActionTypes.SET_SELECTED_PROJECT:
      return {...state, selectedProject: action.payload.selectedProject};
      return;
    default:
      return state;
  }
};
