const Sequelize = require("sequelize");
const sequelize = require("./database");

const Perfil = sequelize.define(
  "perfil",
  {
    id_perfil: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nome_perfil: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "perfil",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "perfil_pk",
        unique: true,
        fields: [{ name: "id_perfil" }],
      },
      {
        name: "pk_perfil",
        unique: true,
        fields: [{ name: "id_perfil" }],
      },
      // Adicione outros índices conforme necessário
    ],
  }
);

module.exports = Perfil;
