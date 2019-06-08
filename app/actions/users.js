import axios from 'axios';
import { GET_USER } from './types';

const apiUrl = 'http://localhost:4000/user';

export const getUser = () => {
  return (dispatch) => {
    return axios.get('/api/user')
      .then(response => dispatch(getUserSuccess(response.data)))
      .catch(error => {
        throw(error);
      });
  };
};

export const getUserSuccess = (user) => {
  return {
    type: GET_USER,
    payload: user
  }
}
