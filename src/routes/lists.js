const express = require("express");
const router = express.Router();
const listsController = require("../app/controllers/ListsController");

router.delete('/:id', listsController.destroy);
router.patch("/:id/restore", listsController.restore);
router.get("/create", listsController.create);
router.post("/store", listsController.store);


module.exports = router;
