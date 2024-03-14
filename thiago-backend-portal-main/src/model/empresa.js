const Sequelize = require("sequelize");
const sequelize = require("./database");

const Empresa = sequelize.define(
  "empresa",
  {
    id_emp: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    codigo_emp: {
      type: Sequelize.STRING(6),
      allowNull: true,
    },
    nome_emp: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    email_emp: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    nif_emp: {
      type: Sequelize.STRING(9),
      allowNull: true,
    },
    attribute_22: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    codigo_post_emp: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    inicio_contrato: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    fim_contrato: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "empresa",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "empresa_pk",
        unique: true,
        fields: [{ name: "id_emp" }],
      },
      {
        name: "pk_empresa",
        unique: true,
        fields: [{ name: "id_emp" }],
      },
      // Adicione outros índices conforme necessário
    ],
  }
);

module.exports = Empresa;
