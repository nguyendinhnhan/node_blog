const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: {type: String, maxlength: 255, required: true},
    description: {type: String, maxlength: 600},
    image: {type: String},
    slug: {type: String, slug: 'name', unique: true},
    videoId: {type: String, maxlength: 50, required: true},
  },
  {
    timestamps: true,
  },
);

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  overrideMethods: 'all',
  deletedAt: true,
});

module.exports = mongoose.model('Course', Course);
