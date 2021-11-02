const newsRouter = require("./news");

function route(app) {
  app.get("/", (req, res) => {
    // res.send('Hello World!')
    res.render("home");
  });

  // app.get("/news", (req, res) => {
  //   res.render("news");
  // });
  app.use("/news", newsRouter);

  app.get("/search", (req, res) => {
    res.render("search");
  });

  app.post("/search", (req, res) => {
    console.log(req.body);
    res.send("");
  });
}

module.exports = route;
