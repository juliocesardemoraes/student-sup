const express = require("express");
const router = express.Router();
const horasController = require("../controllers/horasController");

router.post("/create", horasController.create);

router.get("/list", horasController.list);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
