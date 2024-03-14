const Sequelize = require("sequelize");
const sequelize = require("./database");
const USER = require("./USER");

const UserCopia = sequelize.define(
  "user_copia",
  {
    user_copia_id: {
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
        key: "user_id",
      },
    },
    telemovel_copia: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    iban_copia: {
      type: Sequelize.STRING(34),
      allowNull: true,
    },
    morada_copia: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    codigo_post_copia: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    email_user_copia: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    pass_copia: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    cargo_copia: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    ccidadao_copia: {
      type: Sequelize.STRING(9),
      allowNull: true,
    },
    data_con_copia: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    vezes_editadas: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "user_copia",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "pk_user_copia",
        unique: true,
        fields: [{ name: "user_copia_id" }],
      },
      {
        name: "salva_fk",
        fields: [{ name: "user_id" }],
      },
      {
        name: "user_copia_pk",
        unique: true,
        fields: [{ name: "user_copia_id" }],
      },
    ],
  }
);

UserCopia.belongsTo(USER, { foreignKey: "user_id" });
USER.hasMany(UserCopia, { foreignKey: "user_id" });

module.exports = UserCopia;
