const express = require("express");
const router = express.Router();
const noticiasController = require("../controllers/noticiasController");

router.post("/create", noticiasController.create);

router.get("/list", noticiasController.list);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
