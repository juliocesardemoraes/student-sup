const sequelize = require("../model/database");
const empresa = require("../model/empresa");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await empresa.findAll({});
    return res.json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

controller.create = async (req, res) => {
  // data
  const { nome_emp, nif_emp,codigo_post_emp, attribute_22, email_emp, inicio_contrato } = req.body;

  try {
    // create
    const data = await empresa.create({
      nome_emp: nome_emp,
      nif_emp: nif_emp,
      codigo_post_emp: codigo_post_emp,
      attribute_22: attribute_22,
      email_emp: email_emp,
      inicio_contrato: inicio_contrato,
    });

    console.log("Empresa criada com sucesso:", data);

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
