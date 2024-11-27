const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Carrinho = sequelize.define('Carrinho', {
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  produtoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
}, {
  tableName: 'carrinho', 
});

module.exports = Carrinho;
