/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.createTable('course_categories', {
    id: {
      type: 'BIGINT',
      primaryKey: true,
    },
    name: {
      type: 'VARCHAR(50)',
      notNull: true,
    }
  });
};

exports.down = pgm => {
  pgm.dropTable('course_categories');
};
