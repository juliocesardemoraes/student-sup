const Sequelize = require("sequelize");
const sequelize = require("./database");

const Noticia = sequelize.define(
  "noticias",
  {
    id_noticias: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    titulo_noticia: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    conteudo_noticia: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    data_noticia: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    resumo_noticia: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    imagem_noticia: {
      type: Sequelize.CHAR(254),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "noticias",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "noticias_pk",
        unique: true,
        fields: [{ name: "id_noticias" }],
      },
      {
        name: "pk_noticias",
        unique: true,
        fields: [{ name: "id_noticias" }],
      },
    ],
  }
);

module.exports = Noticia;
