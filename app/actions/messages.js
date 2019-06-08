import axios from 'axios';
import { POST_MESSAGE, GET_MESSAGES } from './types';

const apiUrl = 'http://localhost:4000/posts';

export const postMessage = ({ text, isPrivate }) => {
  return (dispatch) => {
    return axios.post('/api/messages', {text, isPrivate})
      .then(response => dispatch(postMessageSuccess(response.data)))
      .catch(error => {
        throw(error);
      });
  };
};

export const getMessages = () => {
  return (dispatch) => {
    return axios.get('/api/messages')
      .then(response => dispatch(getMessagesSuccess(response.data)))
      .catch(error => {
        throw(error);
      });
  };
};

export const postMessageSuccess =  (message) => {
  return {
    type: POST_MESSAGE,
    payload: message
  }
};

export const getMessagesSuccess = (messages) => {
  return {
    type: GET_MESSAGES,
    payload: messages
  }
}
