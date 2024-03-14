const sequelize = require("../model/database");
const USER = require("../model/USER");
const Perfil = require("../model/perfil");
const { cryptoPassword, comparePassword } = require("../utils/passwordHash");
const empresa = require("../model/empresa");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await USER.findAll({
      include: [
        { model: USER, as: "manager" }, // inclui o gerente
        { model: USER, as: "colaboradores" }, // inclui os colaboradores
        empresa, // inclui a empresa (substitua "empresa" pelo nome real do seu modelo)
      ],
    });

    return res.json({ success: true, data: data });
  } catch (error) {
    console.error("Erro no controlador:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

controller.listManager = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Acesso não autorizado",
      });
    }

    const colaboradores = await USER.findAll({
      where: { manager_id: req.query.user_id },
      include: [{ model: USER, as: "manager" }, empresa],
    });

    return res.json({ success: true, data: colaboradores });
  } catch (error) {
    console.error("Erro no controlador:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

controller.create = async (req, res) => {
  // data
  const { nome_user, telemovel, iban, email_user, pass, cargo } = req.body;

  try {
    // create
    const data = await USER.create({
      nome_user: nome_user,
      telemovel: telemovel,
      iban: iban,
      email_user: email_user,
      cargo: cargo,
      pass: await cryptoPassword(pass),
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

controller.auth = async (req, res) => {
  if (!req.query.email_user || !req.query.pass) {
    return res.status(400).json({
      success: false,
      message: "Utilizador ou palavra passe faltantes",
    });
  }

  try {
    const user = await USER.findOne({
      where: { email_user: req.query.email_user },
    });
    console.log("USER", user.dataValues);

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Usuário ou senha Inválidos",
      });
    }

    const perfil = await Perfil.findOne({
      where: { id_perfil: user.id_perfil },
    });

    const isEqual = await comparePassword(req.query.pass, user.pass);
    console.log("ISEQUAL", req.query.pass);
    console.log("ISEQUAL", user.pass);
    console.log("ISEQUAL", isEqual);

    if (!isEqual) {
      return res.status(200).json({
        success: true,
        message: "Acesso permitido!",
        perfil: perfil ? perfil.nome_perfil : null,
        user_id: user.user_id,
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Acesso Inválido",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
    });
  }
};
/*controller.auth = async (req, res) => {
  if (!req.query.email_user || !req.query.pass) {
    return res.status(400).json({
      success: false,
      message: "Utilizador ou palavra passe faltantes",
    });
  }

  const USER = await USER.findOne({ where: { email_user: req.query.email_user } });

  const perfil = await Perfil.findOne({
    where: { id_perfil: Perfil.dataValues.id_perfil },
  });

  if (!USER) {
    return res.status(403).json({
      success: false,
      message: "Usuário ou senha Inválidos",
    });
  }
  const isEqual = await comparePassword(req.query.pass, user.pass);

  if (isEqual) {
    return res.status(200).json({
      success: true,
      message: "Acesso permitido!",
      perfil: Perfil.dataValues.name_perfil,
      user_id: USER.user_id,
    });
  } else {
    return res.status(403).json({
      success: false,
      message: "Acesso Inválido",
    });
  }
};*/
module.exports = controller;
