const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.put("/:id/update", meController.update);

router.delete("/:id", meController.delete);
router.get("/trash", meController.trash);

router.get("/:id/edit", meController.edit);
router.get("/", meController.show);

module.exports = router;
