const Sequelize = require("sequelize");
const sequelize = require("./database");
const USER = require("./USER");
const Status = require("./status");

const HorasTrabalhadas = sequelize.define(
  "horas_trabalhadas",
  {
    id_horas: {
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
    data_inicio: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    horas_estimadas: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    horas_trabalhadas: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    atividade: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    descricao_horas: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    data_horas_fim: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "horas_trabalhadas",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "horas_trabalhadas_pk",
        unique: true,
        fields: [{ name: "id_horas" }],
      },
      {
        name: "pk_horas_trabalhadas",
        unique: true,
        fields: [{ name: "id_horas" }],
      },
      {
        name: "relationship_20_fk",
        fields: [{ name: "id_status" }],
      },
      {
        name: "submete2_fk",
        fields: [{ name: "user_id" }],
      },
    ],
  }
);

HorasTrabalhadas.belongsTo(USER, { foreignKey: "user_id" });
USER.hasMany(HorasTrabalhadas, { foreignKey: "user_id" });

module.exports = HorasTrabalhadas;
