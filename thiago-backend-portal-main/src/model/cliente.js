const { DataTypes } = require("sequelize");
const sequelize = require("./database"); 

const Cliente = sequelize.define(
  "cliente",
  {
    id_cli: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    codigo_emp: {
      type: DataTypes.STRING(6),
      allowNull: true,
    },
    nome_cli: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    nif_emp: {
      type: DataTypes.STRING(9),
      allowNull: true,
    },
    attribute_22: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    codigo_post_emp: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    inicio_contrato: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    fim_contrato: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "cliente",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "cliente_pk",
        unique: true,
        fields: [{ name: "id_cli" }],
      },
      {
        name: "pk_cliente",
        unique: true,
        fields: [{ name: "id_cli" }],
      },
    ],
  }
);

module.exports = Cliente;
