const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vencimentos', {
    id_vencimento: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    data_vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    retribuicao_base: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    irs: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vencimentos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_vencimentos",
        unique: true,
        fields: [
          { name: "id_vencimento" },
        ]
      },
      {
        name: "vencimentos_pk",
        unique: true,
        fields: [
          { name: "id_vencimento" },
        ]
      },
    ]
  });
};
