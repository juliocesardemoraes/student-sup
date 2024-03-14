const sequelize = require("../model/database");
const contrato = require("../model/contrato");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await contrato.findAll({});
    return res.json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

controller.create = async (req, res) => {
  // data
  const { nome_user, telemovel, iban } = req.body;

  try {
    // create
    const data = await contrato.create({
      nome_user: nome_user,
      telemovel: telemovel,
      iban: iban,
    });

    console.log("Usuário criado com sucesso:", data);

    // return res
    return res.status(200).json({
      success: true,
      message: "Registado",
      data: data,
    });
  } catch (error) {
    console.error("Erro: ", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
module.exports = controller;
