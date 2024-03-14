const express = require("express");
const router = express.Router();
const parceiriasController = require("../controllers/parceiriasController");

router.post("/create", parceiriasController.create);

router.get("/list", parceiriasController.list);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
