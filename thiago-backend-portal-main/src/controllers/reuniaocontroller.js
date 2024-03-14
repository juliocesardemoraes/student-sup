const sequelize = require("../model/database");
const reuniao = require("../model/reuniao");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await reuniao.findAll({});
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
    data_reuniao,
    hora_reuniao,
    status_reuniao,
    descricao_reuniao,
  } = req.body;

  try {
    // create
    const data = await reuniao.create({
      user_id: user_id,
      id_status: id_status,
      data_reuniao: data_reuniao,
      hora_reuniao: hora_reuniao,
      status_reuniao: status_reuniao,
      descricao_reuniao: descricao_reuniao,
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
