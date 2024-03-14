const Sequelize = require("sequelize");
const sequelize = require("./database");
const empresa = require("./empresa");
const Recebe = require("./recebe");
const Notificacao = require("./notificacoes");
const deslocacao = require("./deslocacao");
const USER = sequelize.define(
  "USER",
  {
    user_id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_emp: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "empresa",
        key: "id_emp",
      },
    },
    id_doc: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "documentos",
        key: "id_doc",
      },
    },
    id_perfil: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "perfil",
        key: "id_perfil",
      },
    },
    manager_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "User",
        key: "userId",
      },
    },
    id_vencimento: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "vencimentos",
        key: "id_vencimento",
      },
    },
    nome_user: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    codigo_user: {
      type: Sequelize.STRING(6),
      allowNull: true,
    },
    telemovel: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    iban: {
      type: Sequelize.STRING(34),
      allowNull: true,
    },
    morada: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    codigo_post: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    email_user: {
      type: Sequelize.TEXT,
      allowNull: true,
      unique: true,
    },
    pass: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    cargo: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    ccidadao: {
      type: Sequelize.STRING(9),
      allowNull: true,
    },
    is_adm: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    data_con: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    editar: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    consetiu: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    foto_perfil: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "USER",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "pertence_fk",
        fields: [{ name: "id_emp" }],
      },
      {
        name: "pk_user",
        unique: true,
        fields: [{ name: "userId" }],
      },
      {
        name: "recebe_mensal_fk",
        fields: [{ name: "id_vencimento" }],
      },
      {
        name: "relacaomanager_fk",
        fields: [{ name: "manager_id" }],
      },
      {
        name: "tem2_fk",
        fields: [{ name: "id_doc" }],
      },
      {
        name: "tem_atribuido_fk",
        fields: [{ name: "id_perfil" }],
      },
      {
        name: "user_pk",
        unique: true,
        fields: [{ name: "userId" }],
      },
      // Adicione outros índices conforme necessário
    ],
  }
);

USER.belongsTo(empresa, { foreignKey: "id_emp" });
empresa.hasMany(USER, { foreignKey: "id_emp" });

deslocacao.belongsTo(USER, { foreignKey: "user_id" });
USER.hasMany(deslocacao, { foreignKey: "user_id" });

USER.belongsTo(USER, { as: "manager", foreignKey: "manager_id" });
USER.hasMany(USER, { as: "colaboradores", foreignKey: "manager_id" });

Recebe.belongsTo(USER, { foreignKey: "user_id" });
USER.hasMany(Recebe, { foreignKey: "user_id" });

module.exports = USER;
