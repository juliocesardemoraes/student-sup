const Sequelize = require("sequelize");
const sequelize = require("./database");
const USER = require("./USER");
const Status = require("./status");

const Faltas = sequelize.define(
  "faltas",
  {
    id_faltas: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: USER,
        key: "user_Id",
      },
    },
    id_status: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: Status,
        key: "id_status",
      },
    },
    data_inicio_fa: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    data_fim_fa: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    motivo_fa: {
      type: Sequelize.CHAR(1),
      allowNull: true,
    },
    status_fa: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    descricao_fa: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "faltas",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "faltas_pk",
        unique: true,
        fields: [{ name: "id_faltas" }],
      },
      {
        name: "pk_faltas",
        unique: true,
        fields: [{ name: "id_faltas" }],
      },
      {
        name: "relationship_17_fk",
        fields: [{ name: "id_status" }],
      },
      {
        name: "submete_fk",
        fields: [{ name: "user_id" }],
      },
      // Adicione outros índices conforme necessário
    ],
  }
);

Faltas.belongsTo(USER, { foreignKey: "user_id" });
USER.hasMany(Faltas, { foreignKey: "user_id" });

module.exports = Faltas;
