const Sequelize = require("sequelize");
const sequelize = require("./database");

const Parceria = sequelize.define(
  "parcerias",
  {
    id_parceiro: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nome_parceiro: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    protocolo: {
      type: Sequelize.CHAR(1),
      allowNull: true,
    },
    data_inicio_parc: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    data_fim_parc: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    status_parc: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "parcerias",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "parcerias_pk",
        unique: true,
        fields: [{ name: "id_parceiro" }],
      },
      {
        name: "pk_parcerias",
        unique: true,
        fields: [{ name: "id_parceiro" }],
      },
      // Adicione outros índices conforme necessário
    ],
  }
);

module.exports = Parceria;
