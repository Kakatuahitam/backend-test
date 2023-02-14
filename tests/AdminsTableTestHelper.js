/* istanbul ignore file */
const pool = require('../src/Infrastructure/database/postgresql/pool');

const AdminTableTestHelper = {
  async addAdmin({id = '0001', name = 'yuda', email = 'saya@yuda.com', password = 'secretpass',}) {
    const query = {
      text: 'INSERT INTO admins VALUES($1, $2, $3, $4)',
      values: [id, name, email, password],
    };

    await pool.query(query);
  },

  async findAdminById(id) {
    const query = {
      text: 'SELECT * FROM admins WHERE id = $1',
      values: [id],
    };

    const result = await pool.query(query);
    return result.rows;
  }

  async cleanTable() {
    await pool.query('TRUNCATE TABLE admins');
  }
}

module.exports = AdminsTableTestHelper;
