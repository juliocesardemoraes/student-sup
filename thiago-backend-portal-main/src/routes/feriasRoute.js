const express = require("express");
const router = express.Router();
const feriasController = require("../controllers/feriasController");

router.post("/create", feriasController.create);

router.get("/list", feriasController.list);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
