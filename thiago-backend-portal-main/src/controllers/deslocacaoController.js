const USER = require("../model/USER");
const sequelize = require("../model/database");
const deslocacao = require("../model/deslocacao");
const tipo_viatura = require("../model/tipo_viatura");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await deslocacao.findAll({
      include: [{ model: USER }, { model: tipo_viatura }],
    });
    return res.json({ success: true, data: data });
  } catch (error) {
    console.error("Erro no controlador:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

controller.create = async (req, res) => {
  // data
  const {
    user_id,
    id_status,
    id_viatura,
    data_desloc,
    data_desloc_fim,
    local_part,
    local_dest,
    dist_perc,
    descricao_desl,
    is_estrang,
    declaracao_desloc,
  } = req.body;

  try {
    // create
    const data = await deslocacao.create({
      user_id: user_id,
      id_status: id_status,
      id_viatura: id_viatura,
      data_desloc: data_desloc,
      data_desloc_fim: data_desloc_fim,
      local_part: local_part,
      local_dest: local_dest,
      dist_perc: dist_perc,
      descricao_desl: descricao_desl,
      is_estrang: is_estrang,
      declaracao_desloc: declaracao_desloc,
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
