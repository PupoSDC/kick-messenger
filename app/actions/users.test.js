import { GET_USER } from './types';
import { getUserSuccess } from './users';

describe('Users Actions', () => {
  describe('getUserSuccess', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_USER,
        payload: 'user'
      };

      expect(getUserSuccess(expectedResult.payload)).toEqual(expectedResult);
    });
  });
});
