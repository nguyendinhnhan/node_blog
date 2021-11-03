const {multipleMongooseToObject} = require('../../utils/mongoose');

const Course = require('../../models/Course');

class SiteController {
  // [GET] /stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new SiteController();
