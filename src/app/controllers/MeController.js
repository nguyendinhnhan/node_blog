const {multipleMongooseToObject} = require('../../utils/mongoose');

const Course = require('../../models/Course');

class SiteController {
  // [GET] /stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => {
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses),
          deletedCount,
        });
      })
      .catch(next);
  }

  // [GET] /trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        console.log('trash', courses);
        res.render('me/trash-courses', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new SiteController();
