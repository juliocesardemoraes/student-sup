const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create", userController.create);
router.get("/list", userController.list);
router.get("/listManager", userController.list);
router.get("/auth", userController.auth);
router.post("/authflutter", userController.auth);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
