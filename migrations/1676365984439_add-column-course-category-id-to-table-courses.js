/* eslint-disable camelcase */

exports.up = pgm => {
  pgm.addColumn('courses', {
    course_category_id: {
      type: 'BIGINT',
    },
  });
};

exports.down = pgm => {
  pgm.dropColumn('courses', 'course_category_id');
};
