import { POST_MESSAGE, GET_MESSAGES } from 'actions/types';

export default function messagesReducer(state = [], action) {
  switch (action.type) {
    case POST_MESSAGE:
      return [...state, action.payload];
    case GET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
}
