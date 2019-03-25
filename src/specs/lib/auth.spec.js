import {
  deleteAuthToken,
  getAuthToken,
  isUserLoggedIn,
  saveAuthToken,
} from '../../lib/auth';

describe('getAuthToken', () => {
  context('when auth token is NOT saved yet', () => {
    it('returns null', () => {
      deleteAuthToken();

      expect(getAuthToken()).toBeNull();
    });
  });

  context('when some auth token is already saved', () => {
    it('returns that token', () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

      saveAuthToken(token);

      expect(getAuthToken()).toEqual(token);
    });
  });
});

describe('saveAuthToken', () => {
  context('when auth token is NOT saved yet', () => {
    it('stores +newToken+', () => {
      deleteAuthToken();
      const newToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

      saveAuthToken(newToken);

      expect(getAuthToken()).toEqual(newToken);
    });
  });

  context('when some auth token is already saved', () => {
    it('rewrites previously saved auth token by +newToken+', () => {
      const previousToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      const newToken = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJVad';
      saveAuthToken(previousToken);

      saveAuthToken(newToken);

      expect(getAuthToken()).toEqual(newToken);
    });
  });
});

describe('isUserLoggedIn', () => {
  context('when auth token is NOT saved yet', () => {
    it('returns trusty value', () => {
      deleteAuthToken();

      expect(isUserLoggedIn()).toBeFalsy();
    });
  });

  context('when some auth token is already saved', () => {
    it('returns falsy value', () => {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
      saveAuthToken(token);

      expect(isUserLoggedIn()).toBeTruthy();
    });
  });
});

describe('deleteAuthToken', () => {
  it('deletes auth token', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    saveAuthToken(token);

    deleteAuthToken();

    expect(getAuthToken()).toBeNull();
  });
});
