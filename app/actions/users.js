import axios from 'axios';
import { GET_USER } from './types';

export const getUserSuccess = (user) => ({
  type: GET_USER,
  payload: user
});

export const getUser = () => (dispatch) => axios.get('/api/user')
  .then((response) => dispatch(getUserSuccess(response.data)))
  .catch((error) => {
    throw (error);
  });
