import { GET_MESSAGES, NEW_MESSAGE } from 'actions/types';

export default function messagesReducer(state = [], action) {
  switch (action.type) {
    case NEW_MESSAGE:
      return [action.payload, ...state];
    case GET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
}
