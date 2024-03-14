const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_doc', {
    id_tipo_d: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome_doc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipo_doc',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_tipo_doc",
        unique: true,
        fields: [
          { name: "id_tipo_d" },
        ]
      },
      {
        name: "tipo_doc_pk",
        unique: true,
        fields: [
          { name: "id_tipo_d" },
        ]
      },
    ]
  });
};
