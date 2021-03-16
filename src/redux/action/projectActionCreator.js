import * as ActionTypes from './actions.types';
import axios from 'axios';

export const fetchHomeData = () => {
  return (dispatch, getState) => {
    dispatch(fetchHomeProjects());
  };
};

const setProjects = (project) => {
  return {
    type: ActionTypes.SET_PROJECT,
    payload: {project},
  };
};

export const setSelectedProject = (selectedProject) => {
  return {
    type: ActionTypes.SET_SELECTED_PROJECT,
    payload: {selectedProject},
  };
};

export const fetchHomeProjects = () => {
  return (dispatch, getState) => {
    axios
      .get('/project')
      .then((res) => {
        // console.log(res.data.data);
        const {data} = res.data;
        // console.log(data);
        dispatch(setProjects(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
