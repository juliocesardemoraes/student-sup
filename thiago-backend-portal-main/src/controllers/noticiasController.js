const sequelize = require("../model/database");
const noticias = require("../model/noticias");

const controller = {};

controller.list = async (req, res) => {
  try {
    const data = await noticias.findAll({});
    return res.json({ success: true, data: data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

controller.create = async (req, res) => {
  // data
  const {
    titulo_noticia,
    conteudo_noticia,
    data_noticia,
    resumo_noticia,
    imagem_noticia,
  } = req.body;

  try {
    // create
    const data = await noticias.create({
      titulo_noticia:titulo_noticia,
      conteudo_noticia:conteudo_noticia,
      data_noticia: data_noticia,
      resumo_noticia:resumo_noticia,
      imagem_noticia:imagem_noticia
    });

    console.log("Noticia enviada com sucesso:", data);

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
