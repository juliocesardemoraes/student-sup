const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
    id_status: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_status",
        unique: true,
        fields: [
          { name: "id_status" },
        ]
      },
      {
        name: "status_pk",
        unique: true,
        fields: [
          { name: "id_status" },
        ]
      },
    ]
  });
};
