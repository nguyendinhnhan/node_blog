const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    _id: {type: Number},
    name: {type: String, maxlength: 255, required: true},
    description: {type: String, maxlength: 600},
    image: {type: String},
    slug: {type: String, slug: 'name', unique: true},
    videoId: {type: String, maxlength: 50, required: true},
  },
  {
    _id: false,
    timestamps: true,
  },
);

// Custom query helpers
CourseSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty('_sort')) {
    const isValidType = ['asc', 'desc'].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : 'desc',
    });
  }
  return this;
};

// Add plugins
mongoose.plugin(slug);
CourseSchema.plugin(AutoIncrement);
CourseSchema.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true,
});

module.exports = mongoose.model('Course', CourseSchema);
