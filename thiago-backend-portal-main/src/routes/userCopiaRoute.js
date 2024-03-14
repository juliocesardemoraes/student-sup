const express = require("express");
const router = express.Router();
const userCopiaController = require("../controllers/userCopiaController");

router.post("/create", userCopiaController.create);
router.get("/list", userCopiaController.list);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
