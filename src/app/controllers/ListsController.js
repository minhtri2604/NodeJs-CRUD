const Course = require("../models/Ytb");

class ListsController {
  create(req, res) {
    res.render("list/create");
  }
  store(req, res) {
    const course = new Course(req.body);
    course.save().then(() => res.redirect("/"));
  }
  restore(req, res) {
    Course.restore({ _id: req.params.id, deleted: true }).then(() =>
      res.redirect("/me")
    );
  }
  destroy(req,res){
    Course.deleteOne({_id: req.params.id})
    .then(() => res.redirect('/me/trash'))
  }
}

module.exports = new ListsController();
