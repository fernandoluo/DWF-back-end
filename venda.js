
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Venda = sequelize.define('Venda', {
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  preco_total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  data_venda: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'vendas', 
});

module.exports = Venda;
