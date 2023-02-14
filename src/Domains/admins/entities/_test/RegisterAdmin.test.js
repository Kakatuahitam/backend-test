const RegisterAdmin = require('../RegisterAdmin');

describe('a RegisterAdmin entities', () => {
  it('should throw error when payload did contain needed property', () => {
    const payload = {
      email: 'name@email.com',
      password: 'namepass',
    };

    expect(() => new RegisterAdmin(payload)).toThrowError('REGISTER_ADMIN.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    const payload = {
      name: 123,
      email: true,
      password: {},
    };

    expect(() => new RegisterAdmin(payload)).toThrowError('REGISTER_ADMIN.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when name contains more than 50 character', () => {
    const payload = {
      name: 'namenamenamenamenamenamenamenamenamenamenamenamenamenamenamenamename',
      email: 'name@email.com',
      password: 'namepass',
    };

    expect(() => new RegisterAdmin(payload)).toThrowError('REGISTER_ADMIN.NAME_LIMIT_CHAR');
  });

  it('should throw error when name contains restricted character', () => {
    const payload = {
      name: 'na%me',
      email: 'name@email.com',
      password: 'namepass',
    };

    expect(() => new RegisterAdmin(payload)).toThrowError('REGISTER_ADMIN.NAME_CONTAIN_RESTRICTED_CHARACTER');
  });

  it('should create registerAdmin object correctly', () => {
    const payload = {
      name: 'name',
      email: 'name@email.com',
      password: 'namepass',
    };

    const { name, email, password } = new RegisterAdmin(payload);

    expect(name).toEqual(payload.name);
    expect(email).toEqual(payload.email);
    expect(password).toEqual(payload.password);
  });
});
