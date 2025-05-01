const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jornada = sequelize.define('Jornada', {
  usuarioId: DataTypes.INTEGER,
  data: DataTypes.DATEONLY,
  entrada: DataTypes.TIME,
  saida: DataTypes.TIME,
  horasExtras: DataTypes.FLOAT
});

module.exports = Jornada;