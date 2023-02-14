/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.createTable('courses', {
    id: {
      type: 'BIGINT',
      primaryKey: true,
    },
    title: {
      type: 'VARCHAR(50)',
      notNull: true,
    }
  });
};

exports.down = pgm => {
  pgm.dropTable('courses');
};
