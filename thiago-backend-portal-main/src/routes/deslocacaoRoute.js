const express = require("express");
const router = express.Router();
const deslocacaoController = require("../controllers/deslocacaoController");

router.post("/create", deslocacaoController.create);

router.get("/list", deslocacaoController.list);

/*router.delete("/delete", userController.delete);
router.get("/auth", userController.auth);*/

module.exports = router;
