const Sequelize = require("sequelize");
const sequelize = require("./database");
const Notificacao = require("./notificacoes"); // Certifique-se de que está correto
const USER = require("./USER");

const recebe = sequelize.define(
  "recebe",
  {
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: USER, // Corrija aqui para referenciar o modelo USER
        key: "user_id",
      },
    },
    id_noti: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: Notificacao, // Corrija aqui para referenciar o modelo Notificacao
        key: "id_noti",
      },
    },
  },
  {
    sequelize,
    tableName: "recebe",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "pk_recebe",
        unique: true,
        fields: [{ name: "user_id" }, { name: "id_noti" }],
      },
      {
        name: "recebe2_fk",
        fields: [{ name: "id_noti" }],
      },
      {
        name: "recebe_fk",
        fields: [{ name: "user_id" }],
      },
      {
        name: "recebe_pk",
        unique: true,
        fields: [{ name: "user_id" }, { name: "id_noti" }],
      },
      // Adicione outros índices conforme necessário
    ],
  }
);

recebe.belongsTo(Notificacao, {
  foreignKey: "id_noti",
});
Notificacao.hasMany(recebe, { foreignKey: "id_noti" });

module.exports = recebe;
