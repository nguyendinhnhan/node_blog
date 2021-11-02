const newsRouter = require('./news');
const courseRouter = require('./course');
const siteRouter = require('./site');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/courses', courseRouter);
  app.use('/', siteRouter);

  app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('');
  });
}

module.exports = route;
