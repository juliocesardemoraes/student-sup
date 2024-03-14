const sequelize = require("../model/database");
const notificacoes = require("../model/notificacoes");
const USER = require("../model/USER");
const Recebe = require("../model/recebe");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await Recebe.findAll({
      include: [
        {
          model: notificacoes,
        },
        {
          model: USER,
        },
      ],
    });

    return res.json({ success: true, data: data });
  } catch (error) {
    console.error("Erro no controlador:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

controller.create = async (req, res) => {
  // data
  const { id_status, mensagem_noti, data_envio, para_todos } = req.body;

  try {
    // create
    const data = await Notificacao.create({
      id_status: id_status,
      mensagem_noti: mensagem_noti,
      data_envio: data_envio,
      para_todos: para_todos,
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
