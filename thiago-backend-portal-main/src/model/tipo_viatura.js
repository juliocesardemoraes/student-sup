const Sequelize = require("sequelize");
const sequelize = require("./database");

const TipoViatura = sequelize.define(
  "tipo_viatura",
  {
    id_viatura: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nome_viatura: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "tipo_viatura",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "pk_tipo_viatura",
        unique: true,
        fields: [{ name: "id_viatura" }],
      },
      {
        name: "tipo_viatura_pk",
        unique: true,
        fields: [{ name: "id_viatura" }],
      },
      // Adicione outros índices conforme necessário
    ],
  }
);

module.exports = TipoViatura;
