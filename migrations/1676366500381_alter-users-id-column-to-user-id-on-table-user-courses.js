/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.sql("ALTER TABLE user_courses RENAME COLUMN users_id TO user_id");
};

exports.down = pgm => {
  pgm.sql("ALTER TABLE user_courses RENAME COLUMN user_id TO users_id");
};
