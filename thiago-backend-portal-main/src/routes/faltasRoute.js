const express = require("express");
const router = express.Router();
const faltasController = require("../controllers/faltasController");

router.post("/create", faltasController.create);

router.get("/list", faltasController.list);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
