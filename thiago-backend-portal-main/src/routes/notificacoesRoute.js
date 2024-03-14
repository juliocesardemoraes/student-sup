const express = require("express");
const router = express.Router();
const notificacoesController = require("../controllers/notificacoesController");

router.post("/create", notificacoesController.create);

router.get("/list", notificacoesController.list);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
