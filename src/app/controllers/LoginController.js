const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");
const Course = require("../models/Ytb");
class LoginController {
  show(req, res) {
    res.render("login/login");
  }
  user(req, res) {
    
    res.redirect("/");
  }
}

module.exports = new LoginController();
