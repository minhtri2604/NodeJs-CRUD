const Coureses = require("../models/Ytb");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class HomeController {
  show(req, res) {
    Coureses.find({}).then((course) => res.render('home', {course: mutipleMongooseToObject(course)}));
  }


}

module.exports = new HomeController();
