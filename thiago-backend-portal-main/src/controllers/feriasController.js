const USER = require("../model/USER");
const sequelize = require("../model/database");
const ferias = require("../model/ferias");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await ferias.findAll({
      include:[USER],
    });
    return res.json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

controller.create = async (req, res) => {
  // data
  const {
    user_id,
    id_status,
    data_inicio_f,
    data_fim_f,
    status_f,
    descricao_f,
  } = req.body;

  try {
    // create
    const data = await ferias.create({
      user_id: user_id,
      id_status: id_status,
      data_inicio_f: data_inicio_f,
      data_fim_f: data_fim_f,
      status_f: status_f,
      descricao_f: descricao_f,
    });

    console.log("Ferias enviada com sucesso:", data);

    // return res
    return res.status(200).json({
      success: true,
      message: "Enviado",
      data: data,
    });
  } catch (error) {
    console.error("Erro: ", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
module.exports = controller;
