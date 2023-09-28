const loginController = require("./login");
const homeController = require("./home");
const detailController = require("./detail");
const listsController = require("./lists");
const meController = require("./me");

function route(app) {
  
  app.use("/me", meController);
  app.use("/list", listsController);
  app.use("/detail", detailController);

  app.use("/", homeController);


  app.use("/login", loginController);
}

module.exports = route;
