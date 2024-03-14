const Sequelize = require("sequelize");
const sequelize = require("./database");
const USER = require("./USER"); 
const Status = require("./status"); 

const Reuniao = sequelize.define(
  "reuniao",
  {
    id_reuniao: {
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
    data_reuniao: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    hora_reuniao: {
      type: Sequelize.TIME,
      allowNull: true,
    },
    descricao_reuniao: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    status_reuniao: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "reuniao",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "pk_reuniao",
        unique: true,
        fields: [{ name: "id_reuniao" }],
      },
      {
        name: "relationship_15_fk",
        fields: [{ name: "id_status" }],
      },
      {
        name: "reuniao_pk",
        unique: true,
        fields: [{ name: "id_reuniao" }],
      },
      {
        name: "solicita_ao_manager_fk",
        fields: [{ name: "user_id" }],
      },
    ],
  }
);

module.exports = Reuniao;
