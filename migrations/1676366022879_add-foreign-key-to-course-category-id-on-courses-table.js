/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.addConstraint('courses', 'fk_courses.courses_category_id_course_categories.id', 'FOREIGN KEY(course_category_id) REFERENCES course_categories(id) ON DELETE CASCADE');
};

exports.down = pgm => {
  pgm.dropConstraint('courses', 'fk_courses.courses_category_id_course_categories.id');
};
