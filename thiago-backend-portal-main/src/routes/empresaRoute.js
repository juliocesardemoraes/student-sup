const express = require("express");
const router = express.Router();
const empresaController = require("../controllers/empresaController");

router.post("/create", empresaController.create);

router.get("/list", empresaController.list);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
