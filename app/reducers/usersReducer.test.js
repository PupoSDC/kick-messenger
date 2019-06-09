import { getUserSuccess } from 'actions/users';
import usersReducer from './usersReducer';

describe('usersReducer', () => {
  let state;
  beforeEach(() => { state = ''; });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(usersReducer(undefined, '')).toEqual(expectedResult);
  });

  it('should handle the getUserSuccess action correctly', () => {
    const expectedResult = 'Pedro';
    expect(usersReducer(state, getUserSuccess('Pedro'))).toEqual(expectedResult);
  });
});
