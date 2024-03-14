const USER = require("../model/USER");
const sequelize = require("../model/database");
const faltas = require("../model/faltas");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await faltas.findAll({
      include: [USER],
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
    data_inicio_fa,
    data_fim_fa,
    status_fa,
    descricao_fa,
    motivo_fa,
  } = req.body;

  try {
    // create
    const data = await faltas.create({
      user_id: user_id,
      id_status: id_status,
      data_inicio_fa: data_inicio_fa,
      data_fim_fa: data_fim_fa,
      status_fa: status_fa,
      descricao_fa: descricao_fa,
      motivo_fa: motivo_fa,
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
