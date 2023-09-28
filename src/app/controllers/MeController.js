const Course = require("../models/Ytb");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

class MeController {
  show(req, res) {
    Course.find({deleted:null }).then((course) =>
      res.render("me/stored-mylist", {
        course: mutipleMongooseToObject(course),
      })
    );
  }
  edit(req, res) {
    Course.findById({ _id: req.params.id }).then((coures) =>
      res.render("me/edit", { course: mongooseToObject(coures) })
    );
  }
  update(req, res) {
    Course.updateOne({ _id: req.params.id }, req.body).then(() =>
      res.redirect("/me")
    );
  }
  delete(req, res) {
    Course.delete({ _id: req.params.id }).then(() => res.redirect("/me"));
  }
  trash(req, res) {
    Course.find({ deleted: true }).then((course) =>
      res.render("me/trash-mylist", { course: mutipleMongooseToObject(course) })
    );
  }


}
module.exports = new MeController();
