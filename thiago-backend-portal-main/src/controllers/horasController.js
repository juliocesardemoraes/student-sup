const USER = require("../model/USER");
const sequelize = require("../model/database");
const HorasTrabalhadas = require("../model/horas_trabalhadas");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await HorasTrabalhadas.findAll({
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
    data_inicio,
    data_horas_fim,
    horas_estimadas,
    horas_trabalhadas,
    descricao_horas,
  } = req.body;

  try {
    // create
    const data = await HorasTrabalhadas.create({
      user_id: user_id,
      id_status: id_status,
      data_inicio: data_inicio,
      data_horas_fim: data_horas_fim,
      horas_estimadas: horas_estimadas,
      horas_trabalhadas: horas_trabalhadas,
      descricao_horas: descricao_horas,
    });

    console.log("Reunião enviada com sucesso:", data);

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
