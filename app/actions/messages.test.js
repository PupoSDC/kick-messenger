import { GET_MESSAGES, NEW_MESSAGE } from './types';
import { newMessage, getMessagesSuccess } from './messages';

describe('Message Actions', () => {
  describe('newMessage', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: NEW_MESSAGE,
        payload: 'message'
      };

      expect(newMessage(expectedResult.payload)).toEqual(expectedResult);
    });
  });

  describe('getMessagesSuccess', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_MESSAGES,
        payload: 'message'
      };

      expect(getMessagesSuccess(expectedResult.payload)).toEqual(expectedResult);
    });
  });
});
