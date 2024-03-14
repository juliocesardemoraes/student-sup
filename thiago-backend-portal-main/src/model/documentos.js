const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documentos', {
    id_doc: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_tipo_d: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipo_doc',
        key: 'id_tipo_d'
      }
    },
    data_doc: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    documento: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'documentos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "documentos_pk",
        unique: true,
        fields: [
          { name: "id_doc" },
        ]
      },
      {
        name: "existem_fk",
        fields: [
          { name: "id_tipo_d" },
        ]
      },
      {
        name: "pk_documentos",
        unique: true,
        fields: [
          { name: "id_doc" },
        ]
      },
    ]
  });
};
