import { newMessage, getMessagesSuccess } from 'actions/messages';
import messagesReducer from './messagesReducer';

describe('messagesReducer', () => {
  let state;
  beforeEach(() => { state = []; });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(messagesReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the newMessage action correctly', () => {
    const expectedResult = [{ test: '1' }];
    expect(messagesReducer(state, newMessage({ test: '1' }))).toEqual(expectedResult);
  });

  it('should handle the getMessagesSuccess action correctly', () => {
    const expectedResult = [{ test: '1' }, { test: '2' }];
    expect(messagesReducer(state, getMessagesSuccess([{ test: '1' }, { test: '2' }]))).toEqual(expectedResult);
  });
});
