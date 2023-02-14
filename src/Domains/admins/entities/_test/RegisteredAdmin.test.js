const RegisteredAdmin = require('../RegisteredAdmin');

describe('a RegisteredAdmin entity', () => {
  it('should throw error when payload did not contain needed property', () => {
    const payload = {
      name: 'name',
      email: 'name@email.com',
    };

    expect(() => new RegisteredAdmin(payload)).toThrowError('REGISTERED_ADMIN.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    const payload = {
      id: {},
      name: 'name',
      email: 'name@email.com',
    };

    expect(() => new RegisteredAdmin(payload)).toThrowError('REGISTERED_ADMIN.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create registeredAdmin object correctly', () => {
    const payload = {
      id: '9999',
      name: 'name',
      email: 'name@email.com',
    };

    const registeredAdmin = new RegisteredAdmin(payload);

    expect(registeredAdmin.id).toEqual(payload.id);
    expect(registeredAdmin.name).toEqual(payload.name);
    expect(registeredAdmin.email).toEqual(payload.email);
  });
});
