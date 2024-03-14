const sequelize = require("../model/database");
const cliente = require("../model/cliente");


const controller = {};

controller.list = async (req, res) => {
  const data = await cliente.findAll({})
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  return res.json({ success: true, data: data });
};

controller.create = async (req, res) => {
  // data
  const { nome_cli, nif_emp, codigo_post_emp} = req.body;
  // create
  const data = await cliente.create({
    nome_cli: nome_cli,
    nif_emp: nif_emp,
    codigo_post_emp: codigo_post_emp,
  })
    .then(function (data) {
      console.log("Utilizador criado com sucesso:", data);
      return data;
    })
    .catch((error) => {
      console.log("Erro: " + error);
      return error;
    });
  // return res
  return res.status(200).json({
    success: true,
    message: "Registado",
    data: data,
  });
};


