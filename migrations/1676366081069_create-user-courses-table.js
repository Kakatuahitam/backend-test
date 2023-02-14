/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.createTable('user_courses', {
    id: {
      type: 'BIGINT',
      primaryKey: true,
    },
    users_id: {
      type: 'BIGINT',
      notNull: true,
    },
    course_id: {
      type: 'BIGINT',
      notNull: true,
    },
  });

  pgm.addConstraint('user_courses', 'unique_users_id_and_course_id', 'UNIQUE(users_id, course_id)');
  pgm.addConstraint('user_courses', 'fk_user_courses.users_id_users.id', 'FOREIGN KEY(users_id) REFERENCES users(id) ON DELETE CASCADE');
  pgm.addConstraint('user_courses', 'fk_user_courses.course_id_courses.id', 'FOREIGN KEY(course_id) REFERENCES courses(id) ON DELETE CASCADE');
};

exports.down = pgm => {
  pgm.dropTable('user_courses');
};
