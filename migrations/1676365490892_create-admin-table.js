/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.createTable('admin', {
    id: {
      type: 'BIGINT',
      primaryKey: true,
    },
    name: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    email: {
      type: 'VARCHAR(50)',
      notNull: true,
      unique: true,
    },
    password: {
      type: 'VARCHAR(64)',
      notNull: true,
    }
  });
};

exports.down = pgm => {
  pgm.dropTable('admin');
};
