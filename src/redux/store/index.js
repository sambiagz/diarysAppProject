import {createStore, applyMiddleware} from 'redux';
import {appReducer} from '../reducer';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'; // this is for debugging with React-Native-Debugger, you may leave it out

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

export default store;
