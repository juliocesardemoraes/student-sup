const Sequelize = require("sequelize");
const sequelize = require("./database");
const USER = require("./USER");
const Status = require("./status");
const TipoViatura = require("./tipo_viatura");
const Deslocacao = sequelize.define(
  "deslocacao",
  {
    id_desloc: {
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
    id_viatura: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: TipoViatura,
        key: "id_viatura",
      },
    },
    data_desloc: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    data_desloc_fim: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    custo_deslocacao: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    local_part: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    local_dest: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    dist_perc: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    is_estrang: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    declaracao_desloc: {
      type: Sequelize.CHAR(1),
      allowNull: true,
    },
    descricao_desl: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    status_desloc: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    custo_aliment: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    custo_hosped: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    total_custo: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "deslocacao",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "deslocacao_pk",
        unique: true,
        fields: [{ name: "id_desloc" }],
      },
      {
        name: "pk_deslocacao",
        unique: true,
        fields: [{ name: "id_desloc" }],
      },
      {
        name: "relationship_18_fk",
        fields: [{ name: "id_status" }],
      },
      {
        name: "solicita_custo_fk",
        fields: [{ name: "user_id" }],
      },
      {
        name: "utiliza_fk",
        fields: [{ name: "id_viatura" }],
      },
    ],
  }
);

Deslocacao.belongsTo(TipoViatura, {
  foreignKey: "id_viatura",
});
TipoViatura.hasMany(Deslocacao, {
  foreignKey: "id_viatura",
});

module.exports = Deslocacao;
