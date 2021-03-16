import axios from 'axios';
import {BASE_URL} from '../utils/constants';

export const Connection = () => {
  //   BASE_URL = 'http://bim.constology.com/api';
  axios.defaults.baseURL = 'http://bim.constology.com/api';
};
