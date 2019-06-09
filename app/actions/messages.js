import axios from 'axios';
import { POST_MESSAGE, GET_MESSAGES, NEW_MESSAGE } from './types';

export const postMessageSuccess = (message) => ({
  type: POST_MESSAGE,
  payload: message
});

export const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES,
  payload: messages
});

export const newMessageFromSocket = (message) => ({
  type: NEW_MESSAGE,
  payload: message
});

export const postMessage = ({ text, isPrivate }) => (dispatch) => axios.post('/api/messages', { text, isPrivate })
  .then((response) => dispatch(postMessageSuccess(response.data)))
  .catch((error) => {
    throw (error);
  });

export const getMessages = () => (dispatch) => axios.get('/api/messages')
  .then((response) => dispatch(getMessagesSuccess(response.data)))
  .catch((error) => {
    throw (error);
  });
