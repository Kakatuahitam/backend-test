class RegisterAdmin {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, email, password } = payload;

    this.name = name;
    this.email = email;
    this.password = password;
  }

  _verifyPayload({ name, email, password }) {
    if (!name || !email || !password) {
      throw new Error('REGISTER_ADMIN.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      throw new Error('REGISTER_ADMIN.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (name.length > 50) {
      throw new Error('REGISTER_ADMIN.NAME_LIMIT_CHAR');
    }

    if (!name.match(/^[a-zA-Z1-9_]+$/)) {
      throw new Error('REGISTER_ADMIN.NAME_CONTAIN_RESTRICTED_CHARACTER');
    }
  }
}

module.exports = RegisterAdmin;
