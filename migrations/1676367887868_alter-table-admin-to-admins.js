/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.sql("ALTER TABLE admin RENAME TO admins");
};

exports.down = pgm => {
  pgm.sql("ALTER TABLE admins RENAME TO admin");
};
