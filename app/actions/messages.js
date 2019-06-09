import axios from 'axios';
import { GET_MESSAGES, NEW_MESSAGE } from './types';

export const newMessage = (message) => ({
  type: NEW_MESSAGE,
  payload: message
});

export const getMessagesSuccess = (messages) => ({
  type: GET_MESSAGES,
  payload: messages
});

export const postMessage = ({ text, isPrivate }) => (dispatch) => axios.post('/api/messages', { text, isPrivate })
  .then((response) => dispatch(newMessage(response.data)))
  .catch((error) => {
    throw (error);
  });

export const getMessages = () => (dispatch) => axios.get('/api/messages')
  .then((response) => dispatch(getMessagesSuccess(response.data)))
  .catch((error) => {
    throw (error);
  });
