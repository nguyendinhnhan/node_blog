// security issue: handlebars > 4.6, view can't access to property
// convert course to object literal
module.exports = {
  multipleMongooseToObject: function (mongoose) {
    return mongoose.map((m) => m.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
