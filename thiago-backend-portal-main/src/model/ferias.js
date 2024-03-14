const Sequelize = require("sequelize");
const sequelize = require("./database");
const USER = require("./USER");
const Status = require("./status");

const Ferias = sequelize.define(
  "ferias",
  {
    id_ferias: {
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
        key: "user_Id", // Adapte para a chave primária correta do modelo USER
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
    data_inicio_f: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    data_fim_f: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    status_f: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    descricao_f: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "ferias",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "ferias_pk",
        unique: true,
        fields: [{ name: "id_ferias" }],
      },
      {
        name: "pk_ferias",
        unique: true,
        fields: [{ name: "id_ferias" }],
      },
      {
        name: "relationship_16_fk",
        fields: [{ name: "id_status" }],
      },
      {
        name: "solicita_fk",
        fields: [{ name: "user_id" }],
      },
      // Adicione outros índices conforme necessário
    ],
  }
);

Ferias.belongsTo(USER, { foreignKey: "user_id" });
USER.hasMany(Ferias, { foreignKey: "user_id" });



module.exports = Ferias;
