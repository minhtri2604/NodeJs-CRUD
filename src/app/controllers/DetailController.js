const course = require("../models/Ytb");
const { mongooseToObject } = require("../../util/mongoose");

class DetailController {
  detail(req, res) {
    course
      .findById({ _id: req.params.id })
      .then((course) =>
        res.render("list/detail", { course: mongooseToObject(course) })
      );
  }
}

module.exports = new DetailController();
