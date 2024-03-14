const Sequelize = require("sequelize");
const sequelize = require("./database");
const recebe = require("./recebe");

const Notificacao = sequelize.define(
  "notificacoes",
  {
    id_noti: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    id_status: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "status",
        key: "id_status",
      },
    },
    mensagem_noti: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    data_envio: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    status_not: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    para_todos: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "notificacoes",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "notificacoes_pk",
        unique: true,
        fields: [{ name: "id_noti" }],
      },
      {
        name: "pk_notificacoes",
        unique: true,
        fields: [{ name: "id_noti" }],
      },
      {
        name: "relationship_19_fk",
        fields: [{ name: "id_status" }],
      },
    ],
  }
);


module.exports = Notificacao;
