const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Cliente = sequelize.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: true,
  },    
  pais: {
    type: DataTypes.STRING,
    allowNull: true,
  },    
}, {
  tableName: 'cliente', 
});

module.exports = Cliente;
