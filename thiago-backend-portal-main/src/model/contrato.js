const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contrato', {
    id_contr: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'USER',
        key: 'user_id'
      }
    },
    data_inicio_contr: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    data_fim_contr: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    doc_cont: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contrato',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "contrato_pk",
        unique: true,
        fields: [
          { name: "id_contr" },
        ]
      },
      {
        name: "pk_contrato",
        unique: true,
        fields: [
          { name: "id_contr" },
        ]
      },
      {
        name: "tem_fk",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
