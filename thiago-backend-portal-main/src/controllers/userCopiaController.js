const sequelize = require("../model/database");
const UserCopia = require("../model/user_copia");
const Perfil = require("../model/perfil");
const { cryptoPassword, comparePassword } = require("../utils/passwordHash");
const USER = require("../model/USER");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await UserCopia.findAll({ include: [USER] });
    return res.json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

controller.create = async (req, res) => {
  // data
  const { user_id, telemovel_copia, iban_copia, morada_copia, codigo_post_copia, ccidadao_copia } = req.body;

  try {
    // create
    const data = await UserCopia.create({
      user_id: user_id,
      telemovel_copia: telemovel_copia,
      iban_copia: iban_copia,
      morada_copia: morada_copia,
      codigo_post_copia:codigo_post_copia,
      ccidadao_copia: ccidadao_copia
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