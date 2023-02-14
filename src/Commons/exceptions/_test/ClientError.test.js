const ClientError = require('../ClientError');

describe('ClientError', () => {
  it('should throw error when directly used', () => {
    expect(() => new ClientError('')).toThrowError('Cannot instantiate abstract class');
  });
});
