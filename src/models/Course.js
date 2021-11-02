const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

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

module.exports = mongoose.model('Course', Course);
