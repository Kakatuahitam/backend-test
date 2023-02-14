const InvariantError = require('../InvariantError');

describe('InvariantError', () => {
  it('should create error correctly', () => {
    const invariantError = new InvariantError('An error occured');

    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.message).toEqual('An error occured');
    expect(invariantError.name).toEqual('InvariantError');
  });
});
