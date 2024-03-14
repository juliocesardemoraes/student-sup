const sequelize = require("../model/database");
const parceirias = require("../model/parceirias");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await parceirias.findAll({});
    return res.json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

controller.create = async (req, res) => {
  // data
  const {
    nome_parceiro,
    descricao,
    protocolo,
    data_inicio_parc,
    data_fim_parc,
    status_parc,
  } = req.body;

  try {
    // create
    const data = await parceirias.create({
      nome_parceiro:nome_parceiro,
      descricao:descricao,
      protocolo: protocolo,
      data_inicio_parc: data_inicio_parc,
      data_fim_parc:data_fim_parc,
      status_parc:status_parc,
    });

    console.log("Parceirias enviada com sucesso:", data);

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
