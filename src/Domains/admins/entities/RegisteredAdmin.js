class RegisteredAdmin {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, name, email } = payload;

    this.id = id;
    this.name = name;
    this.email = email;
  }

  _verifyPayload({ id, name, email }) {
    if (!id || !name || !email) {
      throw new Error('REGISTERED_ADMIN.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof name !== 'string' || typeof email !== 'string') {
      throw new Error('REGISTERED_ADMIN.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = RegisteredAdmin;
