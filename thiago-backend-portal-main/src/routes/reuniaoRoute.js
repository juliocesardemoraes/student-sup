const express = require("express");
const router = express.Router();
const reuniaoController = require("../controllers/reuniaocontroller");

router.post("/create", reuniaoController.create);

router.get("/list", reuniaoController.list);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
